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
var property_1 = require('../../../model/property');
var PropertyComponent = (function () {
    function PropertyComponent() {
    }
    PropertyComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_2.Input(), 
        __metadata('design:type', property_1.Property)
    ], PropertyComponent.prototype, "property", void 0);
    PropertyComponent = __decorate([
        core_1.Component({
            selector: 'property',
            template: "\n    \t<label for=\"name\" class=\"col-xs-2 col-form-label\">{{ property.name }}</label>\n        <div class=\"col-xs-10\">\n            <input type=\"text\" class=\"form-control\" id=\"name\" value=\"{{ property.defaultValue }}\" placeholder=\"{{ property.placeholder }}\"/>\n        </div>\n        "
        }), 
        __metadata('design:paramtypes', [])
    ], PropertyComponent);
    return PropertyComponent;
}());
exports.PropertyComponent = PropertyComponent;
//# sourceMappingURL=property.component.js.map