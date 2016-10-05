import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
    selector: 'action',
    template: `
        <div style="width:50%; height:80%; background-color: #F7F7F7; float:left;">
            <etlaction (propertySave)="onSave()"
                        [selectedAction]="selectedAction"></etlaction>
        </div>
        `
})
export class ActionComponent {

    @Output() actionSave: EventEmitter<String> = new EventEmitter<String>();

    @Input() selectedAction;

    onSave() {
        this.actionSave.emit('test');
    }
}