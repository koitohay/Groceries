"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SocialShare = require("nativescript-social-share");
var core_1 = require("@angular/core");
var grocery_list_service_1 = require("../../shared/grocery/grocery-list.service");
var ListComponent = /** @class */ (function () {
    function ListComponent(groceryListService) {
        this.groceryListService = groceryListService;
        this.groceryList = [];
        this.grocery = "";
        this.groceryId = -1;
        this.isLoading = true;
        this.listLoaded = false;
    }
    ListComponent.prototype.add = function () {
        if (this.grocery.trim() === "") {
            alert("   Enter a grocery item");
            return;
        }
        // Dismiss the keyboard
        var textField = this.groceryTextField.nativeElement;
        textField.dismissSoftInput();
        var groceryObject = this.groceryListService.add(this.grocery);
        this.groceryList.unshift(groceryObject);
        this.grocery = "";
        // .subscribe(
        //   groceryObject => {
        //     this.groceryList.unshift(groceryObject);
        //     this.grocery = "";
        //   },
        //   () => {
        //     alert({
        //       message: "An error occurred while adding an item to your list.",
        //       okButtonText: "OK"
        //     });
        //     this.grocery = "";
        //   }
        // )
    };
    ListComponent.prototype.delete = function (id) {
        // this.groceryListService.delete(id)
        //   .subscribe(
        //     groceryObject => {
        //         var currentGrocery = this.groceryList.filter(g => g.id == id);
        //         var indexOfGrocery = this.groceryList.indexOf(currentGrocery[0]);
        //             this.groceryList.splice(indexOfGrocery, 1);
        //     },
        //     () => {
        //       alert({
        //         message: "An error occurred while removing an item to your list.",
        //         okButtonText: "OK"
        //       });
        //     }
        //   )
    };
    ListComponent.prototype.share = function () {
        var listString = this.groceryList
            .map(function (grocery) { return grocery.name; })
            .join(", ")
            .trim();
        SocialShare.shareText(listString);
    };
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        var loadedGroceries = this.groceryListService.load();
        // .subscribe(loadedGroceries => {
        loadedGroceries.forEach(function (groceryObject) {
            _this.groceryList.unshift(groceryObject);
        });
        this.isLoading = false;
        this.listLoaded = true;
        // });
    };
    __decorate([
        core_1.ViewChild("groceryTextField"),
        __metadata("design:type", core_1.ElementRef)
    ], ListComponent.prototype, "groceryTextField", void 0);
    ListComponent = __decorate([
        core_1.Component({
            selector: "list",
            moduleId: module.id,
            templateUrl: "./list.html",
            styleUrls: ["./list-common.css", "./list.css"],
            providers: [grocery_list_service_1.GroceryListService]
        }),
        __metadata("design:paramtypes", [grocery_list_service_1.GroceryListService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVEQUF5RDtBQUN6RCxzQ0FBeUU7QUFFekUsa0ZBQStFO0FBVS9FO0lBT0ksdUJBQW9CLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBTjFELGdCQUFXLEdBQW1CLEVBQUUsQ0FBQztRQUNqQyxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsY0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2YsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixlQUFVLEdBQUcsS0FBSyxDQUFDO0lBRTBDLENBQUM7SUFFOUQsMkJBQUcsR0FBSDtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQixLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUNqQyxNQUFNLENBQUM7UUFDVCxDQUFDO1FBRUQsdUJBQXVCO1FBQ3ZCLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7UUFDL0QsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFN0IsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDdEIsY0FBYztRQUNkLHVCQUF1QjtRQUN2QiwrQ0FBK0M7UUFDL0MseUJBQXlCO1FBQ3pCLE9BQU87UUFDUCxZQUFZO1FBQ1osY0FBYztRQUNkLHlFQUF5RTtRQUN6RSwyQkFBMkI7UUFDM0IsVUFBVTtRQUNWLHlCQUF5QjtRQUN6QixNQUFNO1FBQ04sSUFBSTtJQUNSLENBQUM7SUFDRCw4QkFBTSxHQUFOLFVBQU8sRUFBVTtRQUNmLHFDQUFxQztRQUNyQyxnQkFBZ0I7UUFDaEIseUJBQXlCO1FBQ3pCLHlFQUF5RTtRQUN6RSw0RUFBNEU7UUFDNUUsMERBQTBEO1FBQzFELFNBQVM7UUFDVCxjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLDZFQUE2RTtRQUM3RSw2QkFBNkI7UUFDN0IsWUFBWTtRQUNaLFFBQVE7UUFDUixNQUFNO0lBQ1IsQ0FBQztJQUNELDZCQUFLLEdBQUw7UUFDRSxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVzthQUM5QixHQUFHLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsSUFBSSxFQUFaLENBQVksQ0FBQzthQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ1YsSUFBSSxFQUFFLENBQUM7UUFDVixXQUFXLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTCxnQ0FBUSxHQUFSO1FBQUEsaUJBVUQ7UUFURyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbkQsa0NBQWtDO1FBQ2hDLGVBQWUsQ0FBQyxPQUFPLENBQUMsVUFBQyxhQUFhO1lBQ3BDLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDekIsTUFBTTtJQUNWLENBQUM7SUFoRWtDO1FBQTlCLGdCQUFTLENBQUMsa0JBQWtCLENBQUM7a0NBQW1CLGlCQUFVOzJEQUFDO0lBTm5ELGFBQWE7UUFSekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsYUFBYTtZQUMxQixTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxZQUFZLENBQUM7WUFDOUMsU0FBUyxFQUFFLENBQUMseUNBQWtCLENBQUM7U0FDaEMsQ0FBQzt5Q0FTd0MseUNBQWtCO09BUGpELGFBQWEsQ0F1RXpCO0lBQUQsb0JBQUM7Q0FBQSxBQXZFRCxJQXVFQztBQXZFWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFNvY2lhbFNoYXJlIGZyb20gXCJuYXRpdmVzY3JpcHQtc29jaWFsLXNoYXJlXCI7XG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEdyb2NlcnkgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2dyb2NlcnkvZ3JvY2VyeVwiO1xuaW1wb3J0IHsgR3JvY2VyeUxpc3RTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9ncm9jZXJ5L2dyb2NlcnktbGlzdC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibGlzdFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9saXN0Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vbGlzdC1jb21tb24uY3NzXCIsIFwiLi9saXN0LmNzc1wiXSxcbiAgICBwcm92aWRlcnM6IFtHcm9jZXJ5TGlzdFNlcnZpY2VdXG4gIH0pXG5cbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBncm9jZXJ5TGlzdDogQXJyYXk8R3JvY2VyeT4gPSBbXTtcbiAgICBncm9jZXJ5ID0gXCJcIjtcbiAgICBncm9jZXJ5SWQgPSAtMTtcbiAgICBpc0xvYWRpbmcgPSB0cnVlO1xuICAgIGxpc3RMb2FkZWQgPSBmYWxzZTtcbiAgICBAVmlld0NoaWxkKFwiZ3JvY2VyeVRleHRGaWVsZFwiKSBncm9jZXJ5VGV4dEZpZWxkOiBFbGVtZW50UmVmO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZ3JvY2VyeUxpc3RTZXJ2aWNlOiBHcm9jZXJ5TGlzdFNlcnZpY2UpIHt9XG5cbiAgICBhZGQoKSB7XG4gICAgICAgIGlmICh0aGlzLmdyb2NlcnkudHJpbSgpID09PSBcIlwiKSB7XG4gICAgICAgICAgYWxlcnQoXCIgICBFbnRlciBhIGdyb2NlcnkgaXRlbVwiKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICAvLyBEaXNtaXNzIHRoZSBrZXlib2FyZFxuICAgICAgICBsZXQgdGV4dEZpZWxkID0gPFRleHRGaWVsZD50aGlzLmdyb2NlcnlUZXh0RmllbGQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGV4dEZpZWxkLmRpc21pc3NTb2Z0SW5wdXQoKTtcbiAgICAgIFxuICAgICAgICB2YXIgZ3JvY2VyeU9iamVjdCA9IHRoaXMuZ3JvY2VyeUxpc3RTZXJ2aWNlLmFkZCh0aGlzLmdyb2NlcnkpO1xuICAgICAgICB0aGlzLmdyb2NlcnlMaXN0LnVuc2hpZnQoZ3JvY2VyeU9iamVjdCk7XG4gICAgICAgICAgICAgIHRoaXMuZ3JvY2VyeSA9IFwiXCI7XG4gICAgICAgICAgLy8gLnN1YnNjcmliZShcbiAgICAgICAgICAvLyAgIGdyb2NlcnlPYmplY3QgPT4ge1xuICAgICAgICAgIC8vICAgICB0aGlzLmdyb2NlcnlMaXN0LnVuc2hpZnQoZ3JvY2VyeU9iamVjdCk7XG4gICAgICAgICAgLy8gICAgIHRoaXMuZ3JvY2VyeSA9IFwiXCI7XG4gICAgICAgICAgLy8gICB9LFxuICAgICAgICAgIC8vICAgKCkgPT4ge1xuICAgICAgICAgIC8vICAgICBhbGVydCh7XG4gICAgICAgICAgLy8gICAgICAgbWVzc2FnZTogXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBhZGRpbmcgYW4gaXRlbSB0byB5b3VyIGxpc3QuXCIsXG4gICAgICAgICAgLy8gICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgICAgLy8gICAgIHRoaXMuZ3JvY2VyeSA9IFwiXCI7XG4gICAgICAgICAgLy8gICB9XG4gICAgICAgICAgLy8gKVxuICAgICAgfVxuICAgICAgZGVsZXRlKGlkOiBzdHJpbmcpIHtcbiAgICAgICAgLy8gdGhpcy5ncm9jZXJ5TGlzdFNlcnZpY2UuZGVsZXRlKGlkKVxuICAgICAgICAvLyAgIC5zdWJzY3JpYmUoXG4gICAgICAgIC8vICAgICBncm9jZXJ5T2JqZWN0ID0+IHtcbiAgICAgICAgLy8gICAgICAgICB2YXIgY3VycmVudEdyb2NlcnkgPSB0aGlzLmdyb2NlcnlMaXN0LmZpbHRlcihnID0+IGcuaWQgPT0gaWQpO1xuICAgICAgICAvLyAgICAgICAgIHZhciBpbmRleE9mR3JvY2VyeSA9IHRoaXMuZ3JvY2VyeUxpc3QuaW5kZXhPZihjdXJyZW50R3JvY2VyeVswXSk7XG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuZ3JvY2VyeUxpc3Quc3BsaWNlKGluZGV4T2ZHcm9jZXJ5LCAxKTtcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICAoKSA9PiB7XG4gICAgICAgIC8vICAgICAgIGFsZXJ0KHtcbiAgICAgICAgLy8gICAgICAgICBtZXNzYWdlOiBcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIHJlbW92aW5nIGFuIGl0ZW0gdG8geW91ciBsaXN0LlwiLFxuICAgICAgICAvLyAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgICAgIC8vICAgICAgIH0pO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgIClcbiAgICAgIH1cbiAgICAgIHNoYXJlKCkge1xuICAgICAgICBsZXQgbGlzdFN0cmluZyA9IHRoaXMuZ3JvY2VyeUxpc3RcbiAgICAgICAgICAubWFwKGdyb2NlcnkgPT4gZ3JvY2VyeS5uYW1lKVxuICAgICAgICAgIC5qb2luKFwiLCBcIilcbiAgICAgICAgICAudHJpbSgpO1xuICAgICAgICBTb2NpYWxTaGFyZS5zaGFyZVRleHQobGlzdFN0cmluZyk7XG4gICAgICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICB2YXIgbG9hZGVkR3JvY2VyaWVzID0gdGhpcy5ncm9jZXJ5TGlzdFNlcnZpY2UubG9hZCgpO1xuICAgIC8vIC5zdWJzY3JpYmUobG9hZGVkR3JvY2VyaWVzID0+IHtcbiAgICAgIGxvYWRlZEdyb2Nlcmllcy5mb3JFYWNoKChncm9jZXJ5T2JqZWN0KSA9PiB7XG4gICAgICAgIHRoaXMuZ3JvY2VyeUxpc3QudW5zaGlmdChncm9jZXJ5T2JqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMubGlzdExvYWRlZCA9IHRydWU7XG4gICAgLy8gfSk7XG59XG59Il19