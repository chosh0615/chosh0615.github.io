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
var ActionComponent = (function () {
    function ActionComponent() {
        this.actionSave = new core_2.EventEmitter();
    }
    ActionComponent.prototype.onSave = function () {
        this.actionSave.emit('test');
    };
    __decorate([
        core_4.Input(), 
        __metadata('design:type', Object)
    ], ActionComponent.prototype, "selectedAction", void 0);
    __decorate([
        core_3.Output(), 
        __metadata('design:type', core_2.EventEmitter)
    ], ActionComponent.prototype, "actionSave", void 0);
    ActionComponent = __decorate([
        core_1.Component({
            selector: 'action',
            template: "\n        <div style=\"width:50%; height:80%; background-color: #F7F7F7; float:left;\">\n            <etlaction (propertySave)=\"onSave()\"\n                        [selectedAction]=\"selectedAction\"></etlaction>\n        </div>\n        "
        }), 
        __metadata('design:paramtypes', [])
    ], ActionComponent);
    return ActionComponent;
}());
exports.ActionComponent = ActionComponent;
//# sourceMappingURL=action.component.js.map