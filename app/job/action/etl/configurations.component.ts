import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { PropertyService } from '../../../service/property.service';
import { Construct } from       '../../../model/construct';
import { Property } from        '../../../model/property';
import { EtlAction } from        '../../../model/etlaction';

@Component({
    selector: 'configurations',
    template: `
	    <div>
            <form>
                <input type="button" value="Add converter" class="btn btn-secondary" />
                <input type="button" value="Remove converter" class="btn btn-secondary" />
                <div *ngIf="selectedAction != undefined">
                    <construct *ngFor="let construct of selectedAction.constructs" [construct]="construct">
                    </construct>
                </div>

                <button type="button" class="btn btn-default" (click)="onSave()">Save</button>
            </form>
        </div>
        `
})
export class ConfigurationsComponent implements OnInit {

    @Input() selectedAction: EtlAction = undefined;
	@Output() propertySave: EventEmitter<String> = new EventEmitter<String>();

    constructor(private propertyService: PropertyService) {
    }

    ngOnInit() {
        
    }

	onSave() {
		alert(this.selectedAction);
		this.propertySave.emit('test');
	}
}