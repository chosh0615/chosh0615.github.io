import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'commands',
  template: `
    <input type="button" value="Add action" class="btn btn-secondary" *ngIf="selectedAction.actionId != undefined" (click)="onAddClick()"/>
    <input type="button" value="Remove action" class="btn btn-secondary" *ngIf="selectedAction.actionId != undefined" (click)="onRemoveClick()"/>
    <input type="button" value="Save" class="btn btn-primary" />
    <input type="button" value="Execute" class="btn btn-primary" />
    <input type="button" value="Schedule" class="btn btn-primary" />
  `
})
export class CommandsComponent {

  @Input() selectedAction;
  @Output() addClicked : EventEmitter<any> = new EventEmitter();
  @Output() removeClicked : EventEmitter<any> = new EventEmitter();

  onAddClick() {

    this.addClicked.emit();

  }

  onRemoveClick() {

    this.removeClicked.emit();
  }
}