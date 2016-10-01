"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var core_2 = require('@angular/core');
var core_3 = require('@angular/core');
var core_4 = require('@angular/core');
var PropertiesComponent = (function () {
    function PropertiesComponent() {
        this.propertySave = new core_2.EventEmitter();
    }
    PropertiesComponent.prototype.onSave = function () {
        this.propertySave.emit('test');
    };
    __decorate([
        core_3.Output(), 
        __metadata('design:type', core_2.EventEmitter)
    ], PropertiesComponent.prototype, "propertySave", void 0);
    __decorate([
        core_4.Input(), 
        __metadata('design:type', Object)
    ], PropertiesComponent.prototype, "selectedAction", void 0);
    PropertiesComponent = __decorate([
        core_1.Component({
            selector: 'properties',
            template: "\n    <div style=\"width:30%; height:80%; background-color: #DAC4E4; float:left\">\n      <h1>Action Information</h1>\n      <form>\n        <div class=\"form-group\">\n          <label for=\"name\">Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"name\" required value=\"{{selectedAction.name}}\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"alterEgo\">Job Type</label>\n          <input type=\"text\" class=\"form-control\" id=\"alterEgo\">\n        </div>\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"onSave()\">Save</button>\n      </form>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], PropertiesComponent);
    return PropertiesComponent;
}());
exports.PropertiesComponent = PropertiesComponent;
//# sourceMappingURL=properties.component.js.map