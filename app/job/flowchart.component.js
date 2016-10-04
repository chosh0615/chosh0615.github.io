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
        this.selectedAction = {};
        this.actionNumbers = 1;
        this.selected = new core_2.EventEmitter();
        this.unselected = new core_2.EventEmitter();
    }
    FlowchartComponent.prototype.onSelectObject = function (e, node) {
        this.selectedAction = node.data;
        this.selected.emit(node.data);
    };
    FlowchartComponent.prototype.onUnselectObject = function (e) {
        this.selectedAction = {};
        this.unselected.emit();
    };
    FlowchartComponent.prototype.ngAfterViewInit = function () {
        var myself = this;
        this.goObj = go.GraphObject.make;
        this.myDiagram =
            this.goObj(go.Diagram, "myDiagramDiv", {
                initialContentAlignment: go.Spot.Center,
                "undoManager.isEnabled": false,
                layout: this.goObj(go.TreeLayout, // specify a Diagram.layout that arranges trees
                { angle: 90, layerSpacing: 35 }),
                allowDelete: false,
                allowCopy: false,
                allowGroup: false,
                allowUngroup: false
            });
        // the template we defined earlier
        this.myDiagram.nodeTemplate =
            this.goObj(go.Node, "Horizontal", { background: "#99BBCC" }, this.goObj(go.Picture, { margin: 10, width: 50, height: 50, background: "blue" }, new go.Binding("source")), this.goObj(go.TextBlock, "Default Text", { margin: 12, stroke: "white", font: "bold 16px sans-serif" }, new go.Binding("text", "name")));
        this.myDiagram.addDiagramListener("ObjectSingleClicked", function (e) {
            var part = e.subject.part;
            if (!(part instanceof go.Link))
                myself.onSelectObject(e, part);
        });
        this.myDiagram.addDiagramListener("BackgroundSingleClicked", function (e) {
            myself.onUnselectObject(e);
        });
        this.myDiagram.groupTemplate =
            this.goObj(go.Group, "Auto", 
            // declare the Group.layout:
            { layout: this.goObj(go.LayeredDigraphLayout, { direction: 0, columnSpacing: 10 }) }, this.goObj(go.Shape, "RoundedRectangle", // surrounds everything
            { parameter1: 10, fill: "rgba(128,128,128,0.33)" }), this.goObj(go.Panel, "Vertical", // position header above the subgraph
            this.goObj(go.TextBlock, // group title near top, next to button
            { font: "Bold 12pt Sans-Serif" }, new go.Binding("text", "name")), this.goObj(go.Placeholder, // represents area for all member parts
            { padding: 5, background: "white" })));
        var model = this.goObj(go.TreeModel);
        model.nodeDataArray =
            [
                { key: "1", name: "Action 1", actionId: "action001", source: "img/job.jpg" }
            ];
        this.myDiagram.model = model;
        /*
        model.startTransaction("change");
        var data = model.nodeDataArray[5];
        model.setDataProperty(data, "name", "CHANGE");

        model.addNodeData( { key: "8", parent: "2", name: "Group2", actionId:"action006", source: "img/job.jpg", isGroup: true } );
        model.commitTransaction("change");
        */
    };
    FlowchartComponent.prototype.addAction = function () {
        var model = this.myDiagram.model;
        model.startTransaction("addAction");
        var actionNumber = this.genActionNumber();
        var newData = { key: "" + actionNumber, parent: this.selectedAction.key, name: "Action " + actionNumber, actionId: "action" + actionNumber, source: "img/job.jpg" };
        var childNodeData = undefined;
        for (var _i = 0, _a = model.nodeDataArray; _i < _a.length; _i++) {
            var nodeData = _a[_i];
            if (nodeData.parent == this.selectedAction.key) {
                childNodeData = nodeData;
                break;
            }
        }
        model.addNodeData(newData);
        if (childNodeData != undefined)
            model.setDataProperty(childNodeData, "parent", "" + actionNumber);
        model.commitTransaction("addAction");
    };
    FlowchartComponent.prototype.removeAction = function () {
        var model = this.myDiagram.model;
        model.startTransaction("removeAction");
        if (this.selectedAction.parent != undefined) {
            for (var _i = 0, _a = model.nodeDataArray; _i < _a.length; _i++) {
                var nodeData = _a[_i];
                if (nodeData.parent == this.selectedAction.key) {
                    model.setDataProperty(nodeData, "parent", this.selectedAction.parent);
                    break;
                }
            }
        }
        model.removeNodeData(this.selectedAction);
        model.commitTransaction("removeAction");
        this.selectedAction = {};
    };
    FlowchartComponent.prototype.genActionNumber = function () {
        var r = this.actionNumbers + 1;
        this.actionNumbers = r;
        return r;
    };
    __decorate([
        core_3.Output(), 
        __metadata('design:type', core_2.EventEmitter)
    ], FlowchartComponent.prototype, "selected", void 0);
    __decorate([
        core_3.Output(), 
        __metadata('design:type', core_2.EventEmitter)
    ], FlowchartComponent.prototype, "unselected", void 0);
    FlowchartComponent = __decorate([
        core_1.Component({
            selector: 'flowchart',
            template: "\n    <div id=\"myDiagramDiv\" style=\"width:50%; height:80%; background-color: #EEEEEE; float:left\">\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], FlowchartComponent);
    return FlowchartComponent;
}());
exports.FlowchartComponent = FlowchartComponent;
//# sourceMappingURL=flowchart.component.js.map