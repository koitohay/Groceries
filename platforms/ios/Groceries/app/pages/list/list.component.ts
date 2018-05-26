import * as SocialShare from "nativescript-social-share";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Grocery } from "../../shared/grocery/grocery";
import { GroceryListService } from "../../shared/grocery/grocery-list.service";
import { TextField } from "ui/text-field";
@Component({
    selector: "list",
    moduleId: module.id,
    templateUrl: "./list.html",
    styleUrls: ["./list-common.css", "./list.css"],
    providers: [GroceryListService]
  })

export class ListComponent implements OnInit {
    groceryList: Array<Grocery> = [];
    grocery = "";
    groceryId = -1;
    isLoading = true;
    listLoaded = false;
    @ViewChild("groceryTextField") groceryTextField: ElementRef;
    constructor(private groceryListService: GroceryListService) {}

    add() {
        if (this.grocery.trim() === "") {
          alert("   Enter a grocery item");
          return;
        }
      
        // Dismiss the keyboard
        let textField = <TextField>this.groceryTextField.nativeElement;
        textField.dismissSoftInput();
      
        var groceryObject = this.groceryListService.add(this.grocery)
        // this.groceryList.unshift(groceryObject);
        //       this.grocery = "";
          .subscribe(
            groceryObject => {
              this.groceryList.unshift(groceryObject);
              this.grocery = "";
            },
            () => {
              alert({
                message: "An error occurred while adding an item to your list.",
                okButtonText: "OK"
              });
              this.grocery = "";
            }
          )
      }
      delete(id: string) {
        this.groceryListService.delete(id)
          .subscribe(
            groceryObject => {
                var currentGrocery = this.groceryList.filter(g => g.id == id);
                var indexOfGrocery = this.groceryList.indexOf(currentGrocery[0]);
                    this.groceryList.splice(indexOfGrocery, 1);
            },
            () => {
              alert({
                message: "An error occurred while removing an item to your list.",
                okButtonText: "OK"
              });
            }
          )
      }
      share() {
        let listString = this.groceryList
          .map(grocery => grocery.name)
          .join(", ")
          .trim();
        SocialShare.shareText(listString);
      }

  ngOnInit() {
    this.isLoading = true;
  var loadedGroceries = this.groceryListService.load()
  .subscribe(loadedGroceries => {
      loadedGroceries.forEach((groceryObject) => {
        this.groceryList.unshift(groceryObject);
      });
      this.isLoading = false;
      this.listLoaded = true;
    });
}
}