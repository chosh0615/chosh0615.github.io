import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { PropertyService } from '../../../service/property.service';
import { Construct } from       '../../../model/construct';
import { Property } from        '../../../model/property';

@Component({
    selector: 'configurations',
    template: `
	    <div>
            <form>
                <div class="form-group row">
                    <label for="sourceType" class="col-xs-2 col-form-label">Source type</label>
                    <div class="col-xs-10">
                        <select id="sourceType" class="form-control" (change)="onSourceTypeChange($event)">
                            <option value="">--Select--</option>
                            <option *ngFor="let sConst of sourceConstructs" value="{{ sConst.className }}">{{ sConst.displayName }}</option>
                        </select>
                    </div>
                </div>


                <div class="form-group row" *ngFor="let prop of constructProperties">
                    <property [property]="prop"></property>
                </div>

                <button type="button" class="btn btn-default" (click)="onSave()">Save</button>
            </form>
        </div>
        `
})
export class ConfigurationsComponent implements OnInit {

	@Output() propertySave: EventEmitter<String> = new EventEmitter<String>();

	@Input() construct : Construct;

	constructProperties : Property[];
    sourceConstructs: Construct[];

    constructor(private propertyService: PropertyService) {
    }

    ngOnInit() {
        this.sourceConstructs = this.propertyService.getSources();
    }

    onSourceTypeChange($event) {
        this.constructProperties = this.propertyService.getProperties($event.target.value);
    }

	onSave() {
		alert("save");
		this.propertySave.emit('test');
	}
}