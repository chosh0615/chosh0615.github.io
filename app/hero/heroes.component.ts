import { Component } from '@angular/core';
import { Hero } from './hero';
import { LoopbackComponent } from './loop-back.component';

@Component({
  selector: 'my-heroes',
  template: `
        <h1>{{title}}</h1>
        <h2>My favorite hero is: {{ myHero.name }} </h2>
        <p>Heroes:</p>
        <ul>
            <li *ngFor="let hero of heroes">
                {{ hero.name }}
            </li>
        </ul>
        <p *ngIf="heroes.length > 3">There are many heroes!</p>

        <loop-back>??</loop-back>
        `
})
export class HeroesComponent {
    title = "Tour of heros";
    heroes = [
        new Hero(1, 'Windstorm'), 
        new Hero(2, 'Bombasto'), 
        new Hero(3, 'Magneta'), 
        new Hero(4, 'Tornado')];
    myHero = this.heroes[0];
}

