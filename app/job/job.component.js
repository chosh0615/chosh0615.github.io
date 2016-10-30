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
var flowchart_component_1 = require('./flowchart.component');
var property_service_1 = require('../service/property.service');
var actioncontainer_1 = require('../model/actioncontainer');
var etlaction_1 = require('../model/etlaction');
var JobComponent = (function () {
    function JobComponent() {
        this.actionContainerArray = [new actioncontainer_1.ActionContainer('1', "", "New Action", "Action001", "img/job.jpg", new etlaction_1.EtlAction("Empty"))];
        this.selectedActionContainer = undefined;
    }
    JobComponent.prototype.onObjectSelected = function (data) {
        this.selectedActionContainer = data;
    };
    JobComponent.prototype.onObjectUnselected = function (data) {
        this.selectedActionContainer = undefined;
    };
    JobComponent.prototype.onAddClicked = function () {
        this.flowchartComponent.addAction();
    };
    JobComponent.prototype.onRemoveClicked = function () {
        this.flowchartComponent.removeAction();
    };
    JobComponent.prototype.onSave = function (value) {
        alert(value);
    };
    __decorate([
        core_2.ViewChild(flowchart_component_1.FlowchartComponent), 
        __metadata('design:type', flowchart_component_1.FlowchartComponent)
    ], JobComponent.prototype, "flowchartComponent", void 0);
    JobComponent = __decorate([
        core_1.Component({
            selector: 'job',
            template: "\n  \t<div>\n  \t\t<commands [selectedActionContainer]=\"selectedActionContainer\"\n  \t\t\t\t(addClicked)=\"onAddClicked()\"\n  \t\t\t\t(removeClicked)=\"onRemoveClicked()\"></commands>\n  \t</div>\n  \t<div>\n\t    <flowchart (selected)=\"onObjectSelected($event)\"\n\t    \t\t\t(unselected)=\"onObjectUnselected($event)\"\n\t    \t\t\t[actionContainerArray]=\"actionContainerArray\"></flowchart>\n\t    <action (actionSave)=\"onSave($event)\" \n\t    \t\t\t[selectedAction]=\"selectedActionContainer == undefined ? undefined : selectedActionContainer.action\"></action>\n    </div>\n  ",
            providers: [property_service_1.PropertyService]
        }), 
        __metadata('design:paramtypes', [])
    ], JobComponent);
    return JobComponent;
}());
exports.JobComponent = JobComponent;
//# sourceMappingURL=job.component.js.map