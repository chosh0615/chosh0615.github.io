import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { PropertyService }      from '../../../service/property.service';
import { Construct }            from '../../../model/construct';
import { Property }             from '../../../model/property';
import { Action }               from '../../../model/action';

@Component({
    selector: 'etlaction',
    template: `
        <div style="width:100%; height:100%; background-color: #F7F7F7; display:table">
            <div style="height:0px; display:table-row;">
                <h3>Action configuration</h3>
            </div>
            <div style="width:100%; display:table-row;">
                <configurations [construct]="selectedConstruct" style="width:60%; height:100%; overflow-y:scroll; float:left;">
                </configurations>
                <constructs style="width:40%; height:100%; background-color:#888888; overflow-y:scroll; float:left;">
                </constructs>
            </div>

            <div style="width:100%;height:35%; display:table-row; background-color:#909090;">
                sampling area...
            </div>
        </div>
        `
})
export class EtlActionComponent {
	@Output() propertySave: EventEmitter<String> = new EventEmitter<String>();

	@Input() selectedAction : Action;

    selectedConstruct : Construct;

    constructor() {
        this.selectedConstruct = new Construct("", "", []);
    }
}