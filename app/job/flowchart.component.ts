import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { AfterViewInit } from '@angular/core';

declare var go : any;

@Component({
  selector: 'flowchart',
  template: `
    <div id="myDiagramDiv" style="width:50%; height:80%; background-color: #EEEEEE; float:left">
    </div>
  `
})
export class FlowchartComponent implements AfterViewInit {

  goObj : any;
  myDiagram;
  selectedAction : any = {};
  actionNumbers: number = 1;

  @Output() selected: EventEmitter<any> = new EventEmitter();
  @Output() unselected: EventEmitter<any> = new EventEmitter();


	onSelectObject(e, node) {
		this.selectedAction = node.data;
		this.selected.emit(node.data);
	}
	onUnselectObject(e) {
		this.selectedAction = {};
		this.unselected.emit();
	}

  	ngAfterViewInit() {
	  	var myself = this;
		this.goObj = go.GraphObject.make;
		this.myDiagram =
		    this.goObj(go.Diagram, "myDiagramDiv",
		        {
		          initialContentAlignment: go.Spot.Center, // center Diagram contents
		          "undoManager.isEnabled": false, // enable Ctrl-Z to undo and Ctrl-Y to redo
		          layout: this.goObj(go.TreeLayout, // specify a Diagram.layout that arranges trees
		                    { angle: 90, layerSpacing: 35 }),
		          allowDelete: false,
		          allowCopy: false,
		          allowGroup: false,
		          allowUngroup: false
		        });
		
	    // the template we defined earlier
	    this.myDiagram.nodeTemplate =
	      this.goObj(go.Node, "Horizontal",
	        { background: "#99BBCC" },
	        this.goObj(go.Picture,
	          { margin: 10, width: 50, height: 50, background: "blue" },
	          new go.Binding("source")),
	        this.goObj(go.TextBlock, "Default Text",
	          { margin: 12, stroke: "white", font: "bold 16px sans-serif" },
	          new go.Binding("text", "name"))
	      );

	    this.myDiagram.addDiagramListener("ObjectSingleClicked", 
	    	function(e) {
		        var part = e.subject.part;
		        if (!(part instanceof go.Link)) myself.onSelectObject(e, part);
	    	});

	    this.myDiagram.addDiagramListener("BackgroundSingleClicked", 
	    	function(e) {
	    		myself.onUnselectObject(e);
	    	});

	    this.myDiagram.groupTemplate = 
	   	  this.goObj(go.Group, "Auto",
		      // declare the Group.layout:
		      { layout: this.goObj(go.LayeredDigraphLayout,
		                  { direction: 0, columnSpacing: 10 }) },
		      this.goObj(go.Shape, "RoundedRectangle",  // surrounds everything
		        { parameter1: 10, fill: "rgba(128,128,128,0.33)" }),
		      this.goObj(go.Panel, "Vertical",  // position header above the subgraph
		        this.goObj(go.TextBlock,     // group title near top, next to button
		          { font: "Bold 12pt Sans-Serif" },
		          new go.Binding("text", "name")),
		        this.goObj(go.Placeholder,     // represents area for all member parts
		          { padding: 5, background: "white" })
		      	)
	   	  );

	    var model = this.goObj(go.TreeModel);
	    model.nodeDataArray =
	    [
	      { key: "1",              name: "Action 1", actionId:"action001",   source: "img/job.jpg" }
	    ];
	    this.myDiagram.model = model;

	    /*
	    model.startTransaction("change");
	    var data = model.nodeDataArray[5];
	    model.setDataProperty(data, "name", "CHANGE");

	    model.addNodeData( { key: "8", parent: "2", name: "Group2", actionId:"action006", source: "img/job.jpg", isGroup: true } );
	    model.commitTransaction("change");
	    */
	}

	addAction() {
		let model = this.myDiagram.model;
		model.startTransaction("addAction");
		let actionNumber = this.genActionNumber();
		let newData = { key: "" + actionNumber, parent: this.selectedAction.key, name: "Action " + actionNumber, actionId: "action" + actionNumber, source: "img/job.jpg" };
		
		let childNodeData = undefined;
		for(let nodeData of model.nodeDataArray) {
			if(nodeData.parent == this.selectedAction.key) {
				childNodeData = nodeData;
				break;
			}
		}

		model.addNodeData( newData );
		if(childNodeData != undefined) 
			model.setDataProperty(childNodeData, "parent", "" + actionNumber);
		model.commitTransaction("addAction");
	}

	removeAction() {
		let model = this.myDiagram.model;
		model.startTransaction("removeAction");
		
		if(this.selectedAction.parent != undefined) {
			for(let nodeData of model.nodeDataArray) {
				if(nodeData.parent == this.selectedAction.key) {
					model.setDataProperty(nodeData, "parent", this.selectedAction.parent);
					break;
				}
			}
		}

		model.removeNodeData(this.selectedAction);
		model.commitTransaction("removeAction");

		this.selectedAction = {};
	}

	genActionNumber() {
		var r = this.actionNumbers + 1;
		this.actionNumbers = r;
		return r;
	}

}