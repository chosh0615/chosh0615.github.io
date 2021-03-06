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
var actioncontainer_1 = require('../model/actioncontainer');
var CommandsComponent = (function () {
    function CommandsComponent() {
        this.selectedActionContainer = undefined;
        this.addClicked = new core_2.EventEmitter();
        this.removeClicked = new core_2.EventEmitter();
    }
    CommandsComponent.prototype.onAddClick = function () {
        this.addClicked.emit();
    };
    CommandsComponent.prototype.onRemoveClick = function () {
        this.removeClicked.emit();
    };
    CommandsComponent.prototype.onSaveClick = function () {
        alert(this.selectedActionContainer);
    };
    __decorate([
        core_4.Input(), 
        __metadata('design:type', actioncontainer_1.ActionContainer)
    ], CommandsComponent.prototype, "selectedActionContainer", void 0);
    __decorate([
        core_3.Output(), 
        __metadata('design:type', core_2.EventEmitter)
    ], CommandsComponent.prototype, "addClicked", void 0);
    __decorate([
        core_3.Output(), 
        __metadata('design:type', core_2.EventEmitter)
    ], CommandsComponent.prototype, "removeClicked", void 0);
    CommandsComponent = __decorate([
        core_1.Component({
            selector: 'commands',
            template: "\n    <input type=\"button\" value=\"Add action\" class=\"btn btn-secondary\" *ngIf=\"selectedActionContainer != undefined\" (click)=\"onAddClick()\"/>\n    <input type=\"button\" value=\"Remove action\" class=\"btn btn-secondary\" *ngIf=\"selectedActionContainer != undefined\" (click)=\"onRemoveClick()\"/>\n    <input type=\"button\" value=\"Save\" class=\"btn btn-primary\" (click)=\"onSaveClick()\" />\n    <input type=\"button\" value=\"Execute\" class=\"btn btn-primary\" />\n    <input type=\"button\" value=\"Schedule\" class=\"btn btn-primary\" />\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], CommandsComponent);
    return CommandsComponent;
}());
exports.CommandsComponent = CommandsComponent;
//# sourceMappingURL=commands.component.js.map