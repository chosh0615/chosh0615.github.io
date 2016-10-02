import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'properties',
  template: `
    <div style="width:30%; height:80%; background-color: #DAC4E4; float:left">
      <h1>Action Information</h1>
      <form>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" required value="{{selectedAction.name}}">
        </div>
        <div class="form-group">
          <label for="alterEgo">Job Type</label>
          <input type="text" class="form-control" id="alterEgo">
        </div>
        <button type="button" class="btn btn-default" (click)="onSave()">Save</button>
      </form>
    </div>
  `
})
export class PropertiesComponent {
	@Output() propertySave: EventEmitter<String> = new EventEmitter<String>();

	@Input() selectedAction;

	onSave() {
		this.propertySave.emit('test');
	}
}