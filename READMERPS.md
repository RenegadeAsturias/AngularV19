AngularV19

Curso de Angular v19 de Cero a Experto. Regrabado 2025.

Instalaciones iniciales:

1º- Instalar Node.JS (comprobar: node --version) 
2º- Visual Studio Code 
3º- Navegador Google Chrome 
4º- Postman 5º- GIT (comprobar: git --version) 
5º- GIT ( git config --global user.name "<>" ) 
5º- GIT ( git config --global user.email "<>" ) 
6º- Docker Desktop 
7º- Table Plus 
8º- Mongo Compass

Angular CLI ************************************* 
npm install -g @angular/cli

Extensiones VSCode ******************************

    Angular Language Service
    Auto Close Tag
    Activitus Bar
    Auto import
    Auto Rename Tag
    Error Lens
    Paste JSON as Code
    TypeScript Importer
    Editor Config for VSCode
    Better Comments
    Terminal

Extensiones Chrome

    Json Viewer Awesome

Tema VSCode

*Aura Theme (Aura Dark) 
*Iconos (Material Icon Theme)

======================================================

1º Me creo el proyecto en GitHub: AngularV19

2º Por ejemplo desde el terminal de Bash del VSCode configuro mis credenciales de Git en la máquina virtual:
git config --global user.name "<>" 
git config --global user.email "<>"

3º Me creo el proyecto en el VSCode E inicializo el proyecto para utilizar Git: git init

4º Me creo el remoto apuntando al proyecto de GitHub y establezco la rama principal 
git remote add origin https://github.com/RenegadeAsturias/AngularV19.git 
git branch -M main

5º Y actualizo el proyecto local con el proyecto remoto 
git pull origin main

6º Actualizo el README y actualizo los cambios locales en el remoto 
git add . 
git commit -m "Curso AngularV19" 
git push -u origin main

--Para recuper la info git pull origin main

****************************************************************(07/05/2025)

Creo el proyecto: desde /c/angular
$ ng new AngularV19


****************************************************************(08/05/2025)
* CounterPageComponent

git add . 
git commit -m "Curso AngularV19" 
git push -u origin main

****************************************************************(09/05/2025)
* Señales
* Angular without ZoneJS (Zoneless) 
* changeDetection: ChangDetectionStrategy.OnPush (=Zoneless)

****************************************************************(09/05/2025)
* Crear nuevo componente con Angular CLI: 
* NavComponent
/c/angular/AngularV19/src/app/component/shared/navbar

$ ng g c navbar
CREATE src/app/component/shared/navbar/navbar/navbar.component.html (22 bytes)
CREATE src/app/component/shared/navbar/navbar/navbar.component.spec.ts (615 bytes)
CREATE src/app/component/shared/navbar/navbar/navbar.component.ts (225 bytes)
CREATE src/app/component/shared/navbar/navbar/navbar.component.css (0 bytes)

*Directivas: [RouterLink, RouterLinkActive] ********************
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
})

****************************************************************(10/05/2025)
* Crear nuevo componente con Angular CLI: 
* DragonballPageComponent

****************************************************************(11/05/2025)

reneg@DESKTOP-LMA62OH MINGW64 /c/angular/AngularV19/src/app/pages (main)
$ ng g c dragonball

* Nuevo flujo de control @for
================================================================

@for
Similar al *ngFor, ahora tenemos una nueva forma de realizar ciclos en nuestra data, 
que también es combinable con el @if (que no se podía hacer antes)

Ejemplo:
<!-- ingredient-list.component.html -->
<ul>
@for (ingredient of ingredientList; track ingredient.name) {
  <li>{{ ingredient.quantity }} - {{ ingredient.name }}</li>
}
</ul>

La propiedad “track” le permite a angular poder seguir el elemento en caso de que el listado cambie.
Variables disponibles dentro del @for

Pipe Descripción
$count..... Numero total de elementos del listado
$index..... Posición index del elemento actual
$first..... Valor boolean que determina si es el primer elemento del listado
$last...... Valor boolean que determina si es el último elemento del listado
$even...... Determina si el índice actual es par
$odd....... Determina si el índice es impar

@for (item of items; track item.id;
let idx = $index, e = $even) {
  Item #{{ idx }}: {{ item.name }}
}

* Evalua si aplicar la clase si cumple la validación:
<strong [class.text-danger]="character.power>9000">


* Nuevo flujo de control @if
================================================================

@if
Similar al *ngIf ahora tenemos un @if mucho más poderoso

// user-controls.component.ts
@Component({
  standalone: true,
  selector: 'user-controls',
  template: `
    @if (isAdmin) {
      <button>Erase database</button>
    }
  `,
})
export class UserControls {
  isAdmin = true;
}

@else

// user-controls.component.ts
@Component({
  standalone: true,
  selector: 'user-controls',
  template: `
    @if (isAdmin) {
      <button>Erase database</button>
    } @else {
      <p>You are not authorized.</p>
    }
  `,
  })
  export class UserControls {
    isAdmin = true;
  }

* Referencia local a un input
ejemplo: #txtName
<input type="text" ...
    (change)="name.set(txtName.value)" --> Actualiza el valor de la señal cuando sale del input
    (input)="name.set(txtName.value)"  --> Actualiza el valor de la señal cuando escribe en el input
    #txtName
/>

* Actualizar un array de una señal:
// this.characters().push(newCharacter); ¡Ojo: No usuar! Con señales no se recomienda así
this.characters.update((list)=>[...list,newCharacter]);

* Angular Schematics - Generate a component
*skipStyle --> Desmarcar
*externaTemplate --> Marcar
+Enable, and set as default for this workspace folder
+Enable, and set as default for this workspace folder
+Confirm Pro-tip: check the simulation below


* Mandar información del padre al hijo:
* Para ello utilizamos la función 'input' de @angular/core
* Desde el mundo exterior nos tienen que aportar esta información que hemos establecido como obligatoria
export class CharacterListComponent {
  characters = input.required();
}

Y para mandar el array de caracteres desde su padre utilizmos
<dragonball-character-list [characters]="characters()"/>


* Se recomienda para importar interfaces utilizar 'type'
import type { Character } from '../../../interfaces/character.interface';

git add . 
git commit -m "Curso AngularV19" 
git push -u origin main
















