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
var property_service_1 = require('../../../service/property.service');
var construct_1 = require('../../../model/construct');
var ConfigurationsComponent = (function () {
    function ConfigurationsComponent(propertyService) {
        this.propertyService = propertyService;
        this.propertySave = new core_2.EventEmitter();
    }
    ConfigurationsComponent.prototype.ngOnInit = function () {
        this.constructs = [new construct_1.Construct("Source", "test", "tes", []),
            new construct_1.Construct("Writer", "test", "test", [])];
    };
    ConfigurationsComponent.prototype.onSave = function () {
        alert("save");
        this.propertySave.emit('test');
    };
    __decorate([
        core_3.Output(), 
        __metadata('design:type', core_2.EventEmitter)
    ], ConfigurationsComponent.prototype, "propertySave", void 0);
    ConfigurationsComponent = __decorate([
        core_1.Component({
            selector: 'configurations',
            template: "\n\t    <div>\n            <form>\n                <input type=\"button\" value=\"Add converter\" class=\"btn btn-secondary\" />\n                <input type=\"button\" value=\"Remove converter\" class=\"btn btn-secondary\" />\n                <construct *ngFor=\"let construct of constructs\" [construct]=\"construct\">\n                </construct>\n\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"onSave()\">Save</button>\n            </form>\n        </div>\n        "
        }), 
        __metadata('design:paramtypes', [property_service_1.PropertyService])
    ], ConfigurationsComponent);
    return ConfigurationsComponent;
}());
exports.ConfigurationsComponent = ConfigurationsComponent;
//# sourceMappingURL=configurations.component.js.map