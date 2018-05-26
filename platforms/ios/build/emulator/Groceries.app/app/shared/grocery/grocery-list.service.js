"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var config_1 = require("../config");
var grocery_1 = require("./grocery");
var database_1 = require("../../providers/database/database");
var GroceryListService = /** @class */ (function () {
    function GroceryListService(http, database) {
        this.http = http;
        this.database = database;
        this.baseUrl = config_1.Config.apiUrl + "appdata/" + config_1.Config.appKey + "/Groceries";
        this.groceryList = [];
        this.counter = 0;
    }
    GroceryListService.prototype.ngOnInit = function () {
        var rows = this.database.getDatabase().executeQuery("stocks");
        for (var i = 0; i < rows.length; i++) {
            this.groceryList.push(rows[i]);
        }
    };
    GroceryListService.prototype.load = function () {
        // Kinvey-specific syntax to sort the groceries by last modified time. Don’t worry about the details here.
        // let params = new URLSearchParams();
        // params.append("sort", "{\"_kmd.lmt\": 1}");
        // return this.http.get(this.baseUrl, {
        //   headers: this.getCommonHeaders(),
        //   params: params
        // })
        //   .map(res => res.json())
        //   .map(data => {
        //     let groceryList = [];
        //     data.forEach((grocery) => {
        //       groceryList.push(new Grocery(grocery._id, grocery.Name));
        //     });
        return this.groceryList;
        //   })
        //   .catch(this.handleErrors);
    };
    GroceryListService.prototype.add = function (name) {
        // return this.http.post(
        //   this.baseUrl,
        //   JSON.stringify({ Name: name }),
        //   { headers: this.getCommonHeaders() }
        // )
        // .map(res => res.json())
        // .map(data => {
        //   return new Grocery(data._id, name);
        // })
        // .catch(this.handleErrors);
        var grocery = new grocery_1.Grocery(name + this.counter++, name);
        this.database.getDatabase().createDocument(grocery);
        return grocery;
    };
    GroceryListService.prototype.delete = function (id) {
        // return this.http.delete(
        //   this.baseUrl + "/" + id,
        //   { headers: this.getCommonHeaders() }
        // )
        //   .map(res => res.json())
        //   .catch(this.handleErrors);
    };
    GroceryListService.prototype.getCommonHeaders = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", "Kinvey " + config_1.Config.token);
        return headers;
    };
    GroceryListService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Observable_1.Observable.throw(error);
    };
    GroceryListService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, database_1.Database])
    ], GroceryListService);
    return GroceryListService;
}());
exports.GroceryListService = GroceryListService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvY2VyeS1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncm9jZXJ5LWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtRDtBQUNuRCxzQ0FBeUU7QUFDekUsOENBQTZDO0FBQzdDLG1DQUFpQztBQUNqQyxpQ0FBK0I7QUFFL0Isb0NBQW1DO0FBQ25DLHFDQUFvQztBQUNwQyw4REFBNkQ7QUFFN0Q7SUFJRSw0QkFBb0IsSUFBVSxFQUFVLFFBQWtCO1FBQXRDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBSDFELFlBQU8sR0FBRyxlQUFNLENBQUMsTUFBTSxHQUFHLFVBQVUsR0FBRyxlQUFNLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQztRQUNwRSxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixZQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQ2tELENBQUM7SUFFeEQscUNBQVEsR0FBZjtRQUNFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLENBQUM7SUFDSCxDQUFDO0lBRUQsaUNBQUksR0FBSjtRQUNFLDBHQUEwRztRQUMxRyxzQ0FBc0M7UUFDdEMsOENBQThDO1FBRTlDLHVDQUF1QztRQUN2QyxzQ0FBc0M7UUFDdEMsbUJBQW1CO1FBQ25CLEtBQUs7UUFDTCw0QkFBNEI7UUFDNUIsbUJBQW1CO1FBQ25CLDRCQUE0QjtRQUM1QixrQ0FBa0M7UUFDbEMsa0VBQWtFO1FBQ2xFLFVBQVU7UUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QixPQUFPO1FBQ1AsK0JBQStCO0lBQ2pDLENBQUM7SUFDRCxnQ0FBRyxHQUFILFVBQUksSUFBWTtRQUNkLHlCQUF5QjtRQUN6QixrQkFBa0I7UUFDbEIsb0NBQW9DO1FBQ3BDLHlDQUF5QztRQUN6QyxJQUFJO1FBQ0osMEJBQTBCO1FBQzFCLGlCQUFpQjtRQUNqQix3Q0FBd0M7UUFDeEMsS0FBSztRQUNMLDZCQUE2QjtRQUM3QixJQUFJLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwRCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFDRCxtQ0FBTSxHQUFOLFVBQU8sRUFBVTtRQUNmLDJCQUEyQjtRQUMzQiw2QkFBNkI7UUFDN0IseUNBQXlDO1FBQ3pDLElBQUk7UUFDSiw0QkFBNEI7UUFDNUIsK0JBQStCO0lBQ2pDLENBQUM7SUFDRCw2Q0FBZ0IsR0FBaEI7UUFDRSxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDbkQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsU0FBUyxHQUFHLGVBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxRCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFRCx5Q0FBWSxHQUFaLFVBQWEsS0FBZTtRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFakMsQ0FBQztJQWxFVSxrQkFBa0I7UUFEOUIsaUJBQVUsRUFBRTt5Q0FLZSxXQUFJLEVBQW9CLG1CQUFRO09BSi9DLGtCQUFrQixDQW1FOUI7SUFBRCx5QkFBQztDQUFBLEFBbkVELElBbUVDO0FBbkVZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSwgVVJMU2VhcmNoUGFyYW1zIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5cbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCB7IEdyb2NlcnkgfSBmcm9tIFwiLi9ncm9jZXJ5XCI7XG5pbXBvcnQgeyBEYXRhYmFzZSB9IGZyb20gXCIuLi8uLi9wcm92aWRlcnMvZGF0YWJhc2UvZGF0YWJhc2VcIjtcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHcm9jZXJ5TGlzdFNlcnZpY2Uge1xuICBiYXNlVXJsID0gQ29uZmlnLmFwaVVybCArIFwiYXBwZGF0YS9cIiArIENvbmZpZy5hcHBLZXkgKyBcIi9Hcm9jZXJpZXNcIjtcbiAgZ3JvY2VyeUxpc3QgPSBbXTtcbiAgY291bnRlciA9IDA7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSBkYXRhYmFzZTogRGF0YWJhc2UpIHsgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICBsZXQgcm93cyA9IHRoaXMuZGF0YWJhc2UuZ2V0RGF0YWJhc2UoKS5leGVjdXRlUXVlcnkoXCJzdG9ja3NcIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmdyb2NlcnlMaXN0LnB1c2gocm93c1tpXSk7XG4gICAgfVxuICB9XG5cbiAgbG9hZCgpIHtcbiAgICAvLyBLaW52ZXktc3BlY2lmaWMgc3ludGF4IHRvIHNvcnQgdGhlIGdyb2NlcmllcyBieSBsYXN0IG1vZGlmaWVkIHRpbWUuIERvbuKAmXQgd29ycnkgYWJvdXQgdGhlIGRldGFpbHMgaGVyZS5cbiAgICAvLyBsZXQgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgIC8vIHBhcmFtcy5hcHBlbmQoXCJzb3J0XCIsIFwie1xcXCJfa21kLmxtdFxcXCI6IDF9XCIpO1xuXG4gICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5iYXNlVXJsLCB7XG4gICAgLy8gICBoZWFkZXJzOiB0aGlzLmdldENvbW1vbkhlYWRlcnMoKSxcbiAgICAvLyAgIHBhcmFtczogcGFyYW1zXG4gICAgLy8gfSlcbiAgICAvLyAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gICAgLy8gICAubWFwKGRhdGEgPT4ge1xuICAgIC8vICAgICBsZXQgZ3JvY2VyeUxpc3QgPSBbXTtcbiAgICAvLyAgICAgZGF0YS5mb3JFYWNoKChncm9jZXJ5KSA9PiB7XG4gICAgLy8gICAgICAgZ3JvY2VyeUxpc3QucHVzaChuZXcgR3JvY2VyeShncm9jZXJ5Ll9pZCwgZ3JvY2VyeS5OYW1lKSk7XG4gICAgLy8gICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5ncm9jZXJ5TGlzdDtcbiAgICAvLyAgIH0pXG4gICAgLy8gICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xuICB9XG4gIGFkZChuYW1lOiBzdHJpbmcpIHtcbiAgICAvLyByZXR1cm4gdGhpcy5odHRwLnBvc3QoXG4gICAgLy8gICB0aGlzLmJhc2VVcmwsXG4gICAgLy8gICBKU09OLnN0cmluZ2lmeSh7IE5hbWU6IG5hbWUgfSksXG4gICAgLy8gICB7IGhlYWRlcnM6IHRoaXMuZ2V0Q29tbW9uSGVhZGVycygpIH1cbiAgICAvLyApXG4gICAgLy8gLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAvLyAubWFwKGRhdGEgPT4ge1xuICAgIC8vICAgcmV0dXJuIG5ldyBHcm9jZXJ5KGRhdGEuX2lkLCBuYW1lKTtcbiAgICAvLyB9KVxuICAgIC8vIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gICAgdmFyIGdyb2NlcnkgPSBuZXcgR3JvY2VyeShuYW1lK3RoaXMuY291bnRlcisrLCBuYW1lKTtcbiAgICB0aGlzLmRhdGFiYXNlLmdldERhdGFiYXNlKCkuY3JlYXRlRG9jdW1lbnQoZ3JvY2VyeSk7XG4gICAgcmV0dXJuIGdyb2Nlcnk7XG4gIH1cbiAgZGVsZXRlKGlkOiBzdHJpbmcpIHtcbiAgICAvLyByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZShcbiAgICAvLyAgIHRoaXMuYmFzZVVybCArIFwiL1wiICsgaWQsXG4gICAgLy8gICB7IGhlYWRlcnM6IHRoaXMuZ2V0Q29tbW9uSGVhZGVycygpIH1cbiAgICAvLyApXG4gICAgLy8gICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxuICAgIC8vICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgfVxuICBnZXRDb21tb25IZWFkZXJzKCkge1xuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgaGVhZGVycy5hcHBlbmQoXCJBdXRob3JpemF0aW9uXCIsIFwiS2ludmV5IFwiICsgQ29uZmlnLnRva2VuKTtcbiAgICByZXR1cm4gaGVhZGVycztcbiAgfVxuXG4gIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XG5cbiAgfVxufVxuIl19