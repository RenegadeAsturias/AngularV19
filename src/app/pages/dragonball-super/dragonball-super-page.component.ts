import { Component, computed, inject, signal } from '@angular/core';
import { CharacterListComponent } from '../../component/dragonball/character-list/character-list.component';
import { CharacterAddComponent } from '../../component/dragonball/character-add/character-add/character-add.component';
import type { Character } from '../../interfaces/character.interface';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'app-dragonball-super',
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterListComponent,CharacterAddComponent],
})
export class DragonballSuperPageComponent {

  // Inyección tradicional en el contructor
  // constructor(public dragonballService: DragonballService) {}

  // Nueva forma de inyectar el servicio
  public dragonballService = inject(DragonballService);

}
