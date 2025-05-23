import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import type { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dragonball',
  //imports: [NgClass],
  templateUrl: './dragonball-page.component.html',
})
export class DragonballPageComponent {

  name = signal('Gohan');
  power = signal(100);

  characters = signal<Character[]>([
    {id:1, name:'Goku', power:9001},
    // {id:2, name:'Vegeta', power:8000},
    // {id:3, name:'Picolo', power:3000},
    // {id:4, name:'Yamcha', power:500},
  ]);

  addCharacter() {
    console.log(this.name(), this.power());
    if(!this.name() || !this.power() || this.power()<=0) {
      return;
    }
    const newCharacter:Character = {
      id: this.characters().length+1,
      name: this.name(),
      power: this.power()
    };

    // this.characters().push(newCharacter); Con señales no se recomienda así

    this.characters.update((list)=>[...list,newCharacter]);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }

  /** Evalúa las clases a aplicar
  powerClasses = computed(()=> {
      return { 'text-dander':true,
    };
  }); */

}
