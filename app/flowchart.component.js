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
var FlowchartComponent = (function () {
    function FlowchartComponent() {
        this.selected = new core_2.EventEmitter();
    }
    FlowchartComponent.prototype.onSelectObject = function (e, node) {
        this.selected.emit(node.data);
    };
    FlowchartComponent.prototype.ngAfterViewInit = function () {
        var myself = this;
        this.go = go.GraphObject.make;
        var myDiagram = this.go(go.Diagram, "myDiagramDiv", {
            initialContentAlignment: go.Spot.Center,
            "undoManager.isEnabled": true,
            layout: this.go(go.TreeLayout, // specify a Diagram.layout that arranges trees
            { angle: 90, layerSpacing: 35 })
        });
        // the template we defined earlier
        myDiagram.nodeTemplate =
            this.go(go.Node, "Horizontal", { background: "#99BBCC" }, this.go(go.Picture, { margin: 10, width: 50, height: 50, background: "blue" }, new go.Binding("source")), this.go(go.TextBlock, "Default Text", { margin: 12, stroke: "white", font: "bold 16px sans-serif" }, new go.Binding("text", "name")), { click: function (e, node) { myself.onSelectObject(e, node); } });
        var model = this.go(go.TreeModel);
        model.nodeDataArray =
            [
                { key: "1", name: "Action 1", actionId: "action001", source: "img/job.jpg" },
                { key: "2", parent: "1", name: "Action 2", actionId: "action002", source: "img/job.jpg" },
                { key: "3", parent: "1", name: "Action 3", actionId: "action003", source: "img/job.jpg" },
                { key: "4", parent: "3", name: "Action 4", actionId: "action004", source: "img/job.jpg" },
                { key: "5", parent: "3", name: "Action 5", actionId: "action005", source: "img/job.jpg" },
                { key: "6", parent: "2", name: "Action 6", actionId: "action006", source: "img/job.jpg" }
            ];
        myDiagram.model = model;
    };
    __decorate([
        core_3.Output(), 
        __metadata('design:type', core_2.EventEmitter)
    ], FlowchartComponent.prototype, "selected", void 0);
    FlowchartComponent = __decorate([
        core_1.Component({
            selector: 'flowchart',
            template: "\n    <div id=\"myDiagramDiv\" style=\"width:70%; height:80%; background-color: #DAE4E4; float:left\">\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], FlowchartComponent);
    return FlowchartComponent;
}());
exports.FlowchartComponent = FlowchartComponent;
//# sourceMappingURL=flowchart.component.js.map