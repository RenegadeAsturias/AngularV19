import { Component, computed, signal } from '@angular/core';
import { CharacterListComponent } from '../../component/dragonball/character-list/character-list.component';
import type { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dragonball-super',
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterListComponent],
})
export class DragonballSuperPageComponent {

  name = signal('Gohan');
  power = signal(100);

  characters = signal<Character[]>([
    {id:1, name:'Goku',   power:9001},
    {id:2, name:'Vegeta', power:8000},
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

}
