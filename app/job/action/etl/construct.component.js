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
var property_service_1 = require('../../../service/property.service');
var construct_1 = require('../../../model/construct');
var ConstructComponent = (function () {
    function ConstructComponent(propertyService) {
        this.propertyService = propertyService;
    }
    ConstructComponent.prototype.ngOnInit = function () {
        if (this.construct.constructType == "Source") {
            this.constructSelection = this.propertyService.getSources();
        }
        else if (this.construct.constructType == "Writer") {
            this.constructSelection = this.propertyService.getWriters();
        }
    };
    ConstructComponent.prototype.onSourceTypeChange = function ($event) {
        this.constructProperties = this.propertyService.getProperties($event.target.value);
    };
    __decorate([
        core_2.Input(), 
        __metadata('design:type', construct_1.Construct)
    ], ConstructComponent.prototype, "construct", void 0);
    ConstructComponent = __decorate([
        core_1.Component({
            selector: 'construct',
            template: "\n    \t<h4>{{construct.constructType}}</h4>\n    \t<div style=\"border:1px solid;\">\n\t    \t<div class=\"form-group row\">\n\t            <label for=\"sourceType\" class=\"col-xs-2 col-form-label\">Type</label>\n\t            <div class=\"col-xs-10\">\n\t                <select id=\"sourceType\" class=\"form-control\" (change)=\"onSourceTypeChange($event)\">\n\t                    <option value=\"\">--Select--</option>\n\t                    <option *ngFor=\"let sConst of constructSelection\" value=\"{{ sConst.className }}\">{{ sConst.displayName }}</option>\n\t                </select>\n\t            </div>\n\t        </div>\n\n\t        <div class=\"form-group row\" *ngFor=\"let prop of constructProperties\">\n\t            <property [property]=\"prop\"></property>\n\t        </div>\n        </div>\n        "
        }), 
        __metadata('design:paramtypes', [property_service_1.PropertyService])
    ], ConstructComponent);
    return ConstructComponent;
}());
exports.ConstructComponent = ConstructComponent;
//# sourceMappingURL=construct.component.js.map