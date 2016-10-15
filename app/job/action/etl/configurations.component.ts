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
                <input type="button" value="Add converter" class="btn btn-secondary" />
                <input type="button" value="Remove converter" class="btn btn-secondary" />
                <construct *ngFor="let construct of constructs" [construct]="construct">
                </construct>

                <button type="button" class="btn btn-default" (click)="onSave()">Save</button>
            </form>
        </div>
        `
})
export class ConfigurationsComponent implements OnInit {

	@Output() propertySave: EventEmitter<String> = new EventEmitter<String>();

    constructs: Construct[];

    constructor(private propertyService: PropertyService) {
    }

    ngOnInit() {
        this.constructs = [new Construct("Source", "test", "tes", []),
                      new Construct("Writer", "test", "test", [])];
    }

	onSave() {
		alert("save");
		this.propertySave.emit('test');
	}
}