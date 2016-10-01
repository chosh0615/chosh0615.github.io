import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

declare var go : any;

@Component({
  selector: 'flowchart',
  template: `
    <div id="myDiagramDiv" style="width:70%; height:80%; background-color: #DAE4E4; float:left">
    </div>
  `
})
export class FlowchartComponent {

  go : any;
  @Output() selected: EventEmitter<any> = new EventEmitter();


	onSelectObject(e, node) {
		this.selected.emit(node.data);
	}

  ngAfterViewInit() {
  	var myself = this;
	this.go = go.GraphObject.make;
	var myDiagram =
	    this.go(go.Diagram, "myDiagramDiv",
	        {
	          initialContentAlignment: go.Spot.Center, // center Diagram contents
	          "undoManager.isEnabled": true, // enable Ctrl-Z to undo and Ctrl-Y to redo
	          layout: this.go(go.TreeLayout, // specify a Diagram.layout that arranges trees
	                    { angle: 90, layerSpacing: 35 })
	        });
	
	    // the template we defined earlier
	    myDiagram.nodeTemplate =
	      this.go(go.Node, "Horizontal",
	        { background: "#99BBCC" },
	        this.go(go.Picture,
	          { margin: 10, width: 50, height: 50, background: "blue" },
	          new go.Binding("source")),
	        this.go(go.TextBlock, "Default Text",
	          { margin: 12, stroke: "white", font: "bold 16px sans-serif" },
	          new go.Binding("text", "name")),
	        { click: function(e, node) { myself.onSelectObject(e, node); }  }
	      );

	    var model = this.go(go.TreeModel);
	    model.nodeDataArray =
	    [
	      { key: "1",              name: "Action 1", actionId:"action001",   source: "img/job.jpg" },
	      { key: "2", parent: "1", name: "Action 2", actionId:"action002",    source: "img/job.jpg" },
	      { key: "3", parent: "1", name: "Action 3", actionId:"action003",   source: "img/job.jpg" },
	      { key: "4", parent: "3", name: "Action 4", actionId:"action004", source: "img/job.jpg" },
	      { key: "5", parent: "3", name: "Action 5", actionId:"action005",     source: "img/job.jpg" },
	      { key: "6", parent: "2", name: "Action 6", actionId:"action006", source: "img/job.jpg" }
	    ];
	    myDiagram.model = model;
	    
	}

}