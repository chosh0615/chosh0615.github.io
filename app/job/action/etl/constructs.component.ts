import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { PropertyService } from '../../../service/property.service';
import { Construct } from       '../../../model/construct';
import { Property } from        '../../../model/property';

@Component({
    selector: 'constructs',
    template: `
        <div>
            Constructs...
        </div>
        `
})
export class ConstructsComponent implements OnInit {

    ngOnInit() {
        
    }
}