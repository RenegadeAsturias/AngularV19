import { Component, signal } from '@angular/core';

@Component({
  selector: 'hero-page-component',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.css']
})
export class HeroPageComponent {

  name = signal('Ironman');
  edad = signal(45);

  getHeroDescription() {
    return `${this.name()} - ${this.edad()}`
  }

  changeHero() {
    this.name.set('Spiderman');
    this.edad.set(22);
  }

  changeAge() {
    this.edad.set(33);
  }

  resetForm() {
    this.name.set('Ironman');
    this.edad.set(45);
  }

}
