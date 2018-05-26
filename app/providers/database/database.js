"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
core_1.Injectable();
var Database = /** @class */ (function () {
    function Database() {
        // if(!this.isInstantiated) {
        //     this.storage = new Couchbase("TimeReg");
        //     this.storage.createView("TimesRegister", "1", (document, emitter) => {
        //         emitter.emit(document._id, document);
        //     });
        //     this.isInstantiated = true;
        // }
    }
    Database.prototype.getDatabase = function () {
        // return this.storage;
    };
    return Database;
}());
exports.Database = Database;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRhYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUczQyxpQkFBVSxFQUFFLENBQUE7QUFDWjtJQUtJO1FBQ0ksNkJBQTZCO1FBQzdCLCtDQUErQztRQUMvQyw2RUFBNkU7UUFDN0UsZ0RBQWdEO1FBQ2hELFVBQVU7UUFDVixrQ0FBa0M7UUFDbEMsSUFBSTtJQUNSLENBQUM7SUFFTSw4QkFBVyxHQUFsQjtRQUNJLHVCQUF1QjtJQUMzQixDQUFDO0lBRUwsZUFBQztBQUFELENBQUMsQUFuQkQsSUFtQkM7QUFuQlksNEJBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvdWNoYmFzZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtY291Y2hiYXNlXCI7XG5cbkluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGFiYXNlIHtcblxuICAgIHByaXZhdGUgc3RvcmFnZTogYW55O1xuICAgIHByaXZhdGUgaXNJbnN0YW50aWF0ZWQ6IGJvb2xlYW47XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIGlmKCF0aGlzLmlzSW5zdGFudGlhdGVkKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnN0b3JhZ2UgPSBuZXcgQ291Y2hiYXNlKFwiVGltZVJlZ1wiKTtcbiAgICAgICAgLy8gICAgIHRoaXMuc3RvcmFnZS5jcmVhdGVWaWV3KFwiVGltZXNSZWdpc3RlclwiLCBcIjFcIiwgKGRvY3VtZW50LCBlbWl0dGVyKSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgZW1pdHRlci5lbWl0KGRvY3VtZW50Ll9pZCwgZG9jdW1lbnQpO1xuICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgIC8vICAgICB0aGlzLmlzSW5zdGFudGlhdGVkID0gdHJ1ZTtcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXREYXRhYmFzZSgpIHtcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuc3RvcmFnZTtcbiAgICB9XG5cbn0iXX0=