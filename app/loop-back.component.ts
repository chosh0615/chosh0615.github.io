import { Component } from '@angular/core';

@Component({
  selector: 'loop-back',
  template: `
    <h1>Loop back</h1>
    <input #box (keyup)="0">
    <p>{{box.value}}</p>
  `
})
export class LoopbackComponent { }

