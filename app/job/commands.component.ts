import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';

import { ActionContainer } from '../model/actioncontainer'

@Component({
  selector: 'commands',
  template: `
    <input type="button" value="Add action" class="btn btn-secondary" *ngIf="selectedActionContainer != undefined" (click)="onAddClick()"/>
    <input type="button" value="Remove action" class="btn btn-secondary" *ngIf="selectedActionContainer != undefined" (click)="onRemoveClick()"/>
    <input type="button" value="Save" class="btn btn-primary" (click)="onSaveClick()" />
    <input type="button" value="Execute" class="btn btn-primary" />
    <input type="button" value="Schedule" class="btn btn-primary" />
  `
})
export class CommandsComponent {

  @Input() selectedActionContainer: ActionContainer = undefined;
  @Output() addClicked : EventEmitter<any> = new EventEmitter();
  @Output() removeClicked : EventEmitter<any> = new EventEmitter();

  onAddClick() {

    this.addClicked.emit();
  }

  onRemoveClick() {

    this.removeClicked.emit();
  }

  onSaveClick() {
    alert(this.selectedActionContainer);
  }
}