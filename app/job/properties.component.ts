import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { PropertyService } from '../service/property.service';
import { Construct } from       '../model/construct';
import { Property } from        '../model/property';

@Component({
    selector: 'properties',
    template: `
        <div style="width:50%; height:50%; background-color: #F7F7F7; float:left; overflow-y:scroll">
            <h3>Action configuration</h3>
            <form>
                <div class="form-group row">
                    <label for="sourceType" class="col-xs-2 col-form-label">Source type</label>
                    <div class="col-xs-10">
                        <select id="sourceType" class="form-control" (change)="onSourceTypeChange($event)">
                            <option value="">--Select--</option>
                            <option *ngFor="let construct of sourceConstructs" value="{{ construct.className }}">{{ construct.displayName }}</option>
                        </select>
                    </div>
                </div>


                <div class="form-group row" *ngFor="let prop of sourceProperties">
                    <label for="name" class="col-xs-2 col-form-label">{{ prop.name }}</label>
                    <div class="col-xs-10">
                        <input type="text" class="form-control" id="name" value="{{ prop.defaultValue }}" />
                    </div>
                </div>

                <button type="button" class="btn btn-default" (click)="onSave()">Save</button>
            </form>
        </div>
        <div style="width:50%;height:30%; background-color:#FFFFEE; float:left">
            sampling area...
        </div>
        `
})
export class PropertiesComponent implements OnInit {
	@Output() propertySave: EventEmitter<String> = new EventEmitter<String>();

	@Input() selectedAction;

    sourceConstructs: Construct[];
    sourceProperties: Property[];

    constructor(private propertyService: PropertyService) {
    }

    ngOnInit() {
        this.sourceConstructs = this.propertyService.getSources();
        
    }

    onSourceTypeChange($event) {
        this.sourceProperties = this.propertyService.getProperties($event.target.value);
    }

	onSave() {
		this.propertySave.emit('test');
	}
}