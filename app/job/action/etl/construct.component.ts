import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { PropertyService } from '../../../service/property.service';
import { Construct } from       '../../../model/construct';
import { Property } from        '../../../model/property';

@Component({
    selector: 'construct',
    template: `
    	<h4>{{construct.constructType}}</h4>
    	<div style="border:1px solid;">
	    	<div class="form-group row">
	            <label for="sourceType" class="col-xs-2 col-form-label">Type</label>
	            <div class="col-xs-10">
	                <select id="sourceType" class="form-control" (change)="onSourceTypeChange($event)">
	                    <option value="">--Select--</option>
	                    <option *ngFor="let sConst of constructSelection" value="{{ sConst.className }}">{{ sConst.displayName }}</option>
	                </select>
	            </div>
	        </div>

	        <div class="form-group row" *ngFor="let prop of constructProperties">
	            <property [property]="prop"></property>
	        </div>
        </div>
        `
})
export class ConstructComponent implements OnInit {

	constructProperties : Property[];
    constructSelection: Construct[];

    @Input() construct: Construct;

	constructor(private propertyService: PropertyService) {
	}

    ngOnInit() {
    	if(this.construct.constructType == "Source") {
        	this.constructSelection = this.propertyService.getSources();
    	}
    	else if(this.construct.constructType == "Writer") {
        	this.constructSelection = this.propertyService.getWriters();
    	}
    }

    onSourceTypeChange($event) {
        this.constructProperties = this.propertyService.getProperties($event.target.value);
    }
}