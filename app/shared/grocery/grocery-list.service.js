"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var config_1 = require("../config");
var grocery_1 = require("./grocery");
// import { Database } from "../../providers/database/database";
var GroceryListService = /** @class */ (function () {
    // constructor(private http: Http, private database: Database) { }
    function GroceryListService(http) {
        this.http = http;
        this.baseUrl = config_1.Config.apiUrl + "appdata/" + config_1.Config.appKey + "/Groceries";
        this.groceryList = [];
        this.counter = 0;
    }
    GroceryListService.prototype.ngOnInit = function () {
        // let rows = this.database.getDatabase().executeQuery("stocks");
        // for (let i = 0; i < rows.length; i++) {
        //   this.groceryList.push(rows[i]);
        // }
    };
    GroceryListService.prototype.load = function () {
        var _this = this;
        // Kinvey-specific syntax to sort the groceries by last modified time. Don’t worry about the details here.
        var params = new http_1.URLSearchParams();
        params.append("sort", "{\"_kmd.lmt\": 1}");
        return this.http.get(this.baseUrl, {
            headers: this.getCommonHeaders(),
            params: params
        })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            var groceryList = [];
            data.forEach(function (grocery) {
                groceryList.push(new grocery_1.Grocery(grocery._id, grocery.Name));
            });
            return _this.groceryList;
        })
            .catch(this.handleErrors);
    };
    GroceryListService.prototype.add = function (name) {
        return this.http.post(this.baseUrl, JSON.stringify({ Name: name }), { headers: this.getCommonHeaders() })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            return new grocery_1.Grocery(data._id, name);
        })
            .catch(this.handleErrors);
        // var grocery = new Grocery(name+this.counter++, name);
        // this.database.getDatabase().createDocument(grocery);
        // return grocery;
    };
    GroceryListService.prototype.delete = function (id) {
        return this.http.delete(this.baseUrl + "/" + id, { headers: this.getCommonHeaders() })
            .map(function (res) { return res.json(); })
            .catch(this.handleErrors);
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
        __metadata("design:paramtypes", [http_1.Http])
    ], GroceryListService);
    return GroceryListService;
}());
exports.GroceryListService = GroceryListService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvY2VyeS1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncm9jZXJ5LWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtRDtBQUNuRCxzQ0FBeUU7QUFDekUsOENBQTZDO0FBQzdDLG1DQUFpQztBQUNqQyxpQ0FBK0I7QUFFL0Isb0NBQW1DO0FBQ25DLHFDQUFvQztBQUNwQyxnRUFBZ0U7QUFFaEU7SUFJRSxrRUFBa0U7SUFDbEUsNEJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBSjlCLFlBQU8sR0FBRyxlQUFNLENBQUMsTUFBTSxHQUFHLFVBQVUsR0FBRyxlQUFNLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQztRQUNwRSxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixZQUFPLEdBQUcsQ0FBQyxDQUFDO0lBRXNCLENBQUM7SUFFNUIscUNBQVEsR0FBZjtRQUNFLGlFQUFpRTtRQUNqRSwwQ0FBMEM7UUFDMUMsb0NBQW9DO1FBQ3BDLElBQUk7SUFDTixDQUFDO0lBRUQsaUNBQUksR0FBSjtRQUFBLGlCQWtCQztRQWpCQywwR0FBMEc7UUFDMUcsSUFBSSxNQUFNLEdBQUcsSUFBSSxzQkFBZSxFQUFFLENBQUM7UUFDbkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQUUzQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ2hDLE1BQU0sRUFBRSxNQUFNO1NBQ2YsQ0FBQzthQUNDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDdEIsR0FBRyxDQUFDLFVBQUEsSUFBSTtZQUNQLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTztnQkFDbkIsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLGlCQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMzRCxDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDO1FBQzFCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNELGdDQUFHLEdBQUgsVUFBSSxJQUFZO1FBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNuQixJQUFJLENBQUMsT0FBTyxFQUNaLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFDOUIsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FDckM7YUFDQSxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3RCLEdBQUcsQ0FBQyxVQUFBLElBQUk7WUFDUCxNQUFNLENBQUMsSUFBSSxpQkFBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxQix3REFBd0Q7UUFDeEQsdURBQXVEO1FBQ3ZELGtCQUFrQjtJQUNwQixDQUFDO0lBQ0QsbUNBQU0sR0FBTixVQUFPLEVBQVU7UUFDZixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFDdkIsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FDckM7YUFDRSxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3RCLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNELDZDQUFnQixHQUFoQjtRQUNFLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNuRCxPQUFPLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxTQUFTLEdBQUcsZUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFELE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELHlDQUFZLEdBQVosVUFBYSxLQUFlO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVqQyxDQUFDO0lBbkVVLGtCQUFrQjtRQUQ5QixpQkFBVSxFQUFFO3lDQU1lLFdBQUk7T0FMbkIsa0JBQWtCLENBb0U5QjtJQUFELHlCQUFDO0NBQUEsQUFwRUQsSUFvRUM7QUFwRVksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlLCBVUkxTZWFyY2hQYXJhbXMgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcblxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuaW1wb3J0IHsgR3JvY2VyeSB9IGZyb20gXCIuL2dyb2NlcnlcIjtcbi8vIGltcG9ydCB7IERhdGFiYXNlIH0gZnJvbSBcIi4uLy4uL3Byb3ZpZGVycy9kYXRhYmFzZS9kYXRhYmFzZVwiO1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdyb2NlcnlMaXN0U2VydmljZSB7XG4gIGJhc2VVcmwgPSBDb25maWcuYXBpVXJsICsgXCJhcHBkYXRhL1wiICsgQ29uZmlnLmFwcEtleSArIFwiL0dyb2Nlcmllc1wiO1xuICBncm9jZXJ5TGlzdCA9IFtdO1xuICBjb3VudGVyID0gMDtcbiAgLy8gY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIGRhdGFiYXNlOiBEYXRhYmFzZSkgeyB9XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkgeyB9XG5cbiAgcHVibGljIG5nT25Jbml0KCkge1xuICAgIC8vIGxldCByb3dzID0gdGhpcy5kYXRhYmFzZS5nZXREYXRhYmFzZSgpLmV4ZWN1dGVRdWVyeShcInN0b2Nrc1wiKTtcbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgIHRoaXMuZ3JvY2VyeUxpc3QucHVzaChyb3dzW2ldKTtcbiAgICAvLyB9XG4gIH1cblxuICBsb2FkKCkge1xuICAgIC8vIEtpbnZleS1zcGVjaWZpYyBzeW50YXggdG8gc29ydCB0aGUgZ3JvY2VyaWVzIGJ5IGxhc3QgbW9kaWZpZWQgdGltZS4gRG9u4oCZdCB3b3JyeSBhYm91dCB0aGUgZGV0YWlscyBoZXJlLlxuICAgIGxldCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgcGFyYW1zLmFwcGVuZChcInNvcnRcIiwgXCJ7XFxcIl9rbWQubG10XFxcIjogMX1cIik7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLmJhc2VVcmwsIHtcbiAgICAgIGhlYWRlcnM6IHRoaXMuZ2V0Q29tbW9uSGVhZGVycygpLFxuICAgICAgcGFyYW1zOiBwYXJhbXNcbiAgICB9KVxuICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC5tYXAoZGF0YSA9PiB7XG4gICAgICAgIGxldCBncm9jZXJ5TGlzdCA9IFtdO1xuICAgICAgICBkYXRhLmZvckVhY2goKGdyb2NlcnkpID0+IHtcbiAgICAgICAgICBncm9jZXJ5TGlzdC5wdXNoKG5ldyBHcm9jZXJ5KGdyb2NlcnkuX2lkLCBncm9jZXJ5Lk5hbWUpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLmdyb2NlcnlMaXN0O1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gIH1cbiAgYWRkKG5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcbiAgICAgIHRoaXMuYmFzZVVybCxcbiAgICAgIEpTT04uc3RyaW5naWZ5KHsgTmFtZTogbmFtZSB9KSxcbiAgICAgIHsgaGVhZGVyczogdGhpcy5nZXRDb21tb25IZWFkZXJzKCkgfVxuICAgIClcbiAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxuICAgIC5tYXAoZGF0YSA9PiB7XG4gICAgICByZXR1cm4gbmV3IEdyb2NlcnkoZGF0YS5faWQsIG5hbWUpO1xuICAgIH0pXG4gICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgICAvLyB2YXIgZ3JvY2VyeSA9IG5ldyBHcm9jZXJ5KG5hbWUrdGhpcy5jb3VudGVyKyssIG5hbWUpO1xuICAgIC8vIHRoaXMuZGF0YWJhc2UuZ2V0RGF0YWJhc2UoKS5jcmVhdGVEb2N1bWVudChncm9jZXJ5KTtcbiAgICAvLyByZXR1cm4gZ3JvY2VyeTtcbiAgfVxuICBkZWxldGUoaWQ6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKFxuICAgICAgdGhpcy5iYXNlVXJsICsgXCIvXCIgKyBpZCxcbiAgICAgIHsgaGVhZGVyczogdGhpcy5nZXRDb21tb25IZWFkZXJzKCkgfVxuICAgIClcbiAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xuICB9XG4gIGdldENvbW1vbkhlYWRlcnMoKSB7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICBoZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIiwgXCJLaW52ZXkgXCIgKyBDb25maWcudG9rZW4pO1xuICAgIHJldHVybiBoZWFkZXJzO1xuICB9XG5cbiAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSkpO1xuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcblxuICB9XG59XG4iXX0=