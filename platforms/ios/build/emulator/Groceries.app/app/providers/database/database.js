"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_couchbase_1 = require("nativescript-couchbase");
core_1.Injectable();
var Database = /** @class */ (function () {
    function Database() {
        if (!this.isInstantiated) {
            this.storage = new nativescript_couchbase_1.Couchbase("TimeReg");
            this.storage.createView("TimesRegister", "1", function (document, emitter) {
                emitter.emit(document._id, document);
            });
            this.isInstantiated = true;
        }
    }
    Database.prototype.getDatabase = function () {
        return this.storage;
    };
    return Database;
}());
exports.Database = Database;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXRhYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxpRUFBbUQ7QUFFbkQsaUJBQVUsRUFBRSxDQUFBO0FBQ1o7SUFLSTtRQUNJLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGtDQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLEdBQUcsRUFBRSxVQUFDLFFBQVEsRUFBRSxPQUFPO2dCQUM1RCxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDekMsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUMvQixDQUFDO0lBQ0wsQ0FBQztJQUVNLDhCQUFXLEdBQWxCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVMLGVBQUM7QUFBRCxDQUFDLEFBbkJELElBbUJDO0FBbkJZLDRCQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb3VjaGJhc2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWNvdWNoYmFzZVwiO1xuXG5JbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRhYmFzZSB7XG5cbiAgICBwcml2YXRlIHN0b3JhZ2U6IGFueTtcbiAgICBwcml2YXRlIGlzSW5zdGFudGlhdGVkOiBib29sZWFuO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBpZighdGhpcy5pc0luc3RhbnRpYXRlZCkge1xuICAgICAgICAgICAgdGhpcy5zdG9yYWdlID0gbmV3IENvdWNoYmFzZShcIlRpbWVSZWdcIik7XG4gICAgICAgICAgICB0aGlzLnN0b3JhZ2UuY3JlYXRlVmlldyhcIlRpbWVzUmVnaXN0ZXJcIiwgXCIxXCIsIChkb2N1bWVudCwgZW1pdHRlcikgPT4ge1xuICAgICAgICAgICAgICAgIGVtaXR0ZXIuZW1pdChkb2N1bWVudC5faWQsIGRvY3VtZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5pc0luc3RhbnRpYXRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RGF0YWJhc2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JhZ2U7XG4gICAgfVxuXG59Il19