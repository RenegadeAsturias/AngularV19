import { Component, computed, signal } from '@angular/core';
import { CharacterListComponent } from '../../component/dragonball/character-list/character-list.component';
import { CharacterAddComponent } from '../../component/dragonball/character-add/character-add/character-add.component';
import type { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dragonball-super',
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterListComponent,CharacterAddComponent],
})
export class DragonballSuperPageComponent {

  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    {id:1, name:'Goku',   power:9001},
    {id:2, name:'Vegeta', power:8000},
  ]);

  addCharacter(event: Event) {
    console.log("newCharacter");
    console.log(event);
    // this.characters.update((list)=>[...list,newCharacter]);
  }

}
