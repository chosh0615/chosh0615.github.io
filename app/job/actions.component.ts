import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'actions',
  template: `
    <input type="button" value="Add" class="btn" *ngIf="selectedAction.actionId != undefined" (click)="onAddClick()"/>
    <input type="button" value="Remove" class="btn" *ngIf="selectedAction.actionId != undefined" (click)="onRemoveClick()"/>
  `
})
export class ActionsComponent {

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