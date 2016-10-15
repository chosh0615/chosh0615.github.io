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
var action_1 = require('../../../model/action');
var EtlActionComponent = (function () {
    function EtlActionComponent() {
        this.propertySave = new core_2.EventEmitter();
    }
    __decorate([
        core_3.Output(), 
        __metadata('design:type', core_2.EventEmitter)
    ], EtlActionComponent.prototype, "propertySave", void 0);
    __decorate([
        core_4.Input(), 
        __metadata('design:type', action_1.Action)
    ], EtlActionComponent.prototype, "selectedAction", void 0);
    EtlActionComponent = __decorate([
        core_1.Component({
            selector: 'etlaction',
            template: "\n        <div style=\"width:100%; height:100%; background-color: #F7F7F7; display:table\">\n            <div style=\"height:0px; display:table-row;\">\n                <h3>Action configuration</h3>\n            </div>\n            <div style=\"width:100%; display:table-row;\">\n                <configurations style=\"width:100%; height:100%; overflow-y:scroll; float:left;\">\n                </configurations>\n                <!--\n                <constructs style=\"width:40%; height:100%; background-color:#888888; overflow-y:scroll; float:left;\">\n                </constructs>\n                -->\n            </div>\n\n            <div style=\"width:100%;height:35%; display:table-row; background-color:#909090;\">\n                sampling area...\n            </div>\n        </div>\n        "
        }), 
        __metadata('design:paramtypes', [])
    ], EtlActionComponent);
    return EtlActionComponent;
}());
exports.EtlActionComponent = EtlActionComponent;
//# sourceMappingURL=etlaction.component.js.map