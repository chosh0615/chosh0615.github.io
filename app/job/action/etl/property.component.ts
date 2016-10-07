import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { PropertyService } from '../../../service/property.service';
import { Construct } from       '../../../model/construct';
import { Property } from        '../../../model/property';

@Component({
    selector: 'property',
    template: `
    	<label for="name" class="col-xs-2 col-form-label">{{ property.name }}</label>
        <div class="col-xs-10">
            <input type="text" class="form-control" id="name" value="{{ property.defaultValue }}" placeholder="{{ property.placeholder }}"/>
        </div>
        `
})
export class PropertyComponent implements OnInit {

	@Input() property : Property;
	
    ngOnInit() {
        
    }
}