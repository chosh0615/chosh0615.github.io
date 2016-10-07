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
var property_service_1 = require('../../../service/property.service');
var construct_1 = require('../../../model/construct');
var ConfigurationsComponent = (function () {
    function ConfigurationsComponent(propertyService) {
        this.propertyService = propertyService;
        this.propertySave = new core_2.EventEmitter();
    }
    ConfigurationsComponent.prototype.ngOnInit = function () {
        this.sourceConstructs = this.propertyService.getSources();
    };
    ConfigurationsComponent.prototype.onSourceTypeChange = function ($event) {
        this.constructProperties = this.propertyService.getProperties($event.target.value);
    };
    ConfigurationsComponent.prototype.onSave = function () {
        alert("save");
        this.propertySave.emit('test');
    };
    __decorate([
        core_3.Output(), 
        __metadata('design:type', core_2.EventEmitter)
    ], ConfigurationsComponent.prototype, "propertySave", void 0);
    __decorate([
        core_4.Input(), 
        __metadata('design:type', construct_1.Construct)
    ], ConfigurationsComponent.prototype, "construct", void 0);
    ConfigurationsComponent = __decorate([
        core_1.Component({
            selector: 'configurations',
            template: "\n\t    <div>\n            <form>\n                <div class=\"form-group row\">\n                    <label for=\"sourceType\" class=\"col-xs-2 col-form-label\">Source type</label>\n                    <div class=\"col-xs-10\">\n                        <select id=\"sourceType\" class=\"form-control\" (change)=\"onSourceTypeChange($event)\">\n                            <option value=\"\">--Select--</option>\n                            <option *ngFor=\"let sConst of sourceConstructs\" value=\"{{ sConst.className }}\">{{ sConst.displayName }}</option>\n                        </select>\n                    </div>\n                </div>\n\n\n                <div class=\"form-group row\" *ngFor=\"let prop of constructProperties\">\n                    <property [property]=\"prop\"></property>\n                </div>\n\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"onSave()\">Save</button>\n            </form>\n        </div>\n        "
        }), 
        __metadata('design:paramtypes', [property_service_1.PropertyService])
    ], ConfigurationsComponent);
    return ConfigurationsComponent;
}());
exports.ConfigurationsComponent = ConfigurationsComponent;
//# sourceMappingURL=configurations.component.js.map