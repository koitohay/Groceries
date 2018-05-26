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
        var _this = this;
        if (this.grocery.trim() === "") {
            alert("   Enter a grocery item");
            return;
        }
        // Dismiss the keyboard
        var textField = this.groceryTextField.nativeElement;
        textField.dismissSoftInput();
        var groceryObject = this.groceryListService.add(this.grocery)
            .subscribe(function (groceryObject) {
            _this.groceryList.unshift(groceryObject);
            _this.grocery = "";
        }, function () {
            alert({
                message: "An error occurred while adding an item to your list.",
                okButtonText: "OK"
            });
            _this.grocery = "";
        });
    };
    ListComponent.prototype.delete = function (id) {
        var _this = this;
        this.groceryListService.delete(id)
            .subscribe(function (groceryObject) {
            var currentGrocery = _this.groceryList.filter(function (g) { return g.id == id; });
            var indexOfGrocery = _this.groceryList.indexOf(currentGrocery[0]);
            _this.groceryList.splice(indexOfGrocery, 1);
        }, function () {
            alert({
                message: "An error occurred while removing an item to your list.",
                okButtonText: "OK"
            });
        });
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
        var loadedGroceries = this.groceryListService.load()
            .subscribe(function (loadedGroceries) {
            loadedGroceries.forEach(function (groceryObject) {
                _this.groceryList.unshift(groceryObject);
            });
            _this.isLoading = false;
            _this.listLoaded = true;
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVEQUF5RDtBQUN6RCxzQ0FBeUU7QUFFekUsa0ZBQStFO0FBVS9FO0lBT0ksdUJBQW9CLGtCQUFzQztRQUF0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBTjFELGdCQUFXLEdBQW1CLEVBQUUsQ0FBQztRQUNqQyxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsY0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2YsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixlQUFVLEdBQUcsS0FBSyxDQUFDO0lBRTBDLENBQUM7SUFFOUQsMkJBQUcsR0FBSDtRQUFBLGlCQTBCRztRQXpCQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0IsS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFDakMsTUFBTSxDQUFDO1FBQ1QsQ0FBQztRQUVELHVCQUF1QjtRQUN2QixJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO1FBQy9ELFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBRTdCLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUcxRCxTQUFTLENBQ1IsVUFBQSxhQUFhO1lBQ1gsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDeEMsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDcEIsQ0FBQyxFQUNEO1lBQ0UsS0FBSyxDQUFDO2dCQUNKLE9BQU8sRUFBRSxzREFBc0Q7Z0JBQy9ELFlBQVksRUFBRSxJQUFJO2FBQ25CLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FDRixDQUFBO0lBQ0wsQ0FBQztJQUNELDhCQUFNLEdBQU4sVUFBTyxFQUFVO1FBQWpCLGlCQWVDO1FBZEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7YUFDL0IsU0FBUyxDQUNSLFVBQUEsYUFBYTtZQUNULElBQUksY0FBYyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7WUFDOUQsSUFBSSxjQUFjLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0QsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25ELENBQUMsRUFDRDtZQUNFLEtBQUssQ0FBQztnQkFDSixPQUFPLEVBQUUsd0RBQXdEO2dCQUNqRSxZQUFZLEVBQUUsSUFBSTthQUNuQixDQUFDLENBQUM7UUFDTCxDQUFDLENBQ0YsQ0FBQTtJQUNMLENBQUM7SUFDRCw2QkFBSyxHQUFMO1FBQ0UsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVc7YUFDOUIsR0FBRyxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLElBQUksRUFBWixDQUFZLENBQUM7YUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNWLElBQUksRUFBRSxDQUFDO1FBQ1YsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUwsZ0NBQVEsR0FBUjtRQUFBLGlCQVVEO1FBVEcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRTthQUNuRCxTQUFTLENBQUMsVUFBQSxlQUFlO1lBQ3RCLGVBQWUsQ0FBQyxPQUFPLENBQUMsVUFBQyxhQUFhO2dCQUNwQyxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMxQyxDQUFDLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQWhFa0M7UUFBOUIsZ0JBQVMsQ0FBQyxrQkFBa0IsQ0FBQztrQ0FBbUIsaUJBQVU7MkRBQUM7SUFObkQsYUFBYTtRQVJ6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxhQUFhO1lBQzFCLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixFQUFFLFlBQVksQ0FBQztZQUM5QyxTQUFTLEVBQUUsQ0FBQyx5Q0FBa0IsQ0FBQztTQUNoQyxDQUFDO3lDQVN3Qyx5Q0FBa0I7T0FQakQsYUFBYSxDQXVFekI7SUFBRCxvQkFBQztDQUFBLEFBdkVELElBdUVDO0FBdkVZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgU29jaWFsU2hhcmUgZnJvbSBcIm5hdGl2ZXNjcmlwdC1zb2NpYWwtc2hhcmVcIjtcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgR3JvY2VyeSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZ3JvY2VyeS9ncm9jZXJ5XCI7XG5pbXBvcnQgeyBHcm9jZXJ5TGlzdFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2dyb2NlcnkvZ3JvY2VyeS1saXN0LnNlcnZpY2VcIjtcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJsaXN0XCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xpc3QuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9saXN0LWNvbW1vbi5jc3NcIiwgXCIuL2xpc3QuY3NzXCJdLFxuICAgIHByb3ZpZGVyczogW0dyb2NlcnlMaXN0U2VydmljZV1cbiAgfSlcblxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGdyb2NlcnlMaXN0OiBBcnJheTxHcm9jZXJ5PiA9IFtdO1xuICAgIGdyb2NlcnkgPSBcIlwiO1xuICAgIGdyb2NlcnlJZCA9IC0xO1xuICAgIGlzTG9hZGluZyA9IHRydWU7XG4gICAgbGlzdExvYWRlZCA9IGZhbHNlO1xuICAgIEBWaWV3Q2hpbGQoXCJncm9jZXJ5VGV4dEZpZWxkXCIpIGdyb2NlcnlUZXh0RmllbGQ6IEVsZW1lbnRSZWY7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBncm9jZXJ5TGlzdFNlcnZpY2U6IEdyb2NlcnlMaXN0U2VydmljZSkge31cblxuICAgIGFkZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JvY2VyeS50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgICAgICBhbGVydChcIiAgIEVudGVyIGEgZ3JvY2VyeSBpdGVtXCIpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIC8vIERpc21pc3MgdGhlIGtleWJvYXJkXG4gICAgICAgIGxldCB0ZXh0RmllbGQgPSA8VGV4dEZpZWxkPnRoaXMuZ3JvY2VyeVRleHRGaWVsZC5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0ZXh0RmllbGQuZGlzbWlzc1NvZnRJbnB1dCgpO1xuICAgICAgXG4gICAgICAgIHZhciBncm9jZXJ5T2JqZWN0ID0gdGhpcy5ncm9jZXJ5TGlzdFNlcnZpY2UuYWRkKHRoaXMuZ3JvY2VyeSlcbiAgICAgICAgLy8gdGhpcy5ncm9jZXJ5TGlzdC51bnNoaWZ0KGdyb2NlcnlPYmplY3QpO1xuICAgICAgICAvLyAgICAgICB0aGlzLmdyb2NlcnkgPSBcIlwiO1xuICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICBncm9jZXJ5T2JqZWN0ID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdC51bnNoaWZ0KGdyb2NlcnlPYmplY3QpO1xuICAgICAgICAgICAgICB0aGlzLmdyb2NlcnkgPSBcIlwiO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgYWxlcnQoe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgYWRkaW5nIGFuIGl0ZW0gdG8geW91ciBsaXN0LlwiLFxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB0aGlzLmdyb2NlcnkgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIClcbiAgICAgIH1cbiAgICAgIGRlbGV0ZShpZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZ3JvY2VyeUxpc3RTZXJ2aWNlLmRlbGV0ZShpZClcbiAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgZ3JvY2VyeU9iamVjdCA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRHcm9jZXJ5ID0gdGhpcy5ncm9jZXJ5TGlzdC5maWx0ZXIoZyA9PiBnLmlkID09IGlkKTtcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXhPZkdyb2NlcnkgPSB0aGlzLmdyb2NlcnlMaXN0LmluZGV4T2YoY3VycmVudEdyb2NlcnlbMF0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyb2NlcnlMaXN0LnNwbGljZShpbmRleE9mR3JvY2VyeSwgMSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICBhbGVydCh7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSByZW1vdmluZyBhbiBpdGVtIHRvIHlvdXIgbGlzdC5cIixcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApXG4gICAgICB9XG4gICAgICBzaGFyZSgpIHtcbiAgICAgICAgbGV0IGxpc3RTdHJpbmcgPSB0aGlzLmdyb2NlcnlMaXN0XG4gICAgICAgICAgLm1hcChncm9jZXJ5ID0+IGdyb2NlcnkubmFtZSlcbiAgICAgICAgICAuam9pbihcIiwgXCIpXG4gICAgICAgICAgLnRyaW0oKTtcbiAgICAgICAgU29jaWFsU2hhcmUuc2hhcmVUZXh0KGxpc3RTdHJpbmcpO1xuICAgICAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgdmFyIGxvYWRlZEdyb2NlcmllcyA9IHRoaXMuZ3JvY2VyeUxpc3RTZXJ2aWNlLmxvYWQoKVxuICAuc3Vic2NyaWJlKGxvYWRlZEdyb2NlcmllcyA9PiB7XG4gICAgICBsb2FkZWRHcm9jZXJpZXMuZm9yRWFjaCgoZ3JvY2VyeU9iamVjdCkgPT4ge1xuICAgICAgICB0aGlzLmdyb2NlcnlMaXN0LnVuc2hpZnQoZ3JvY2VyeU9iamVjdCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmxpc3RMb2FkZWQgPSB0cnVlO1xuICAgIH0pO1xufVxufSJdfQ==