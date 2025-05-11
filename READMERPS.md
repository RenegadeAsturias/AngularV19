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

****************************************************************(11/05/2025)

* Mandar información del hijo al padre:
* Ahora tenemos un pequeño componente 'character-add' con un formulario que realiza el alta del nuevo character
* cuando hace clic en el botón de Agregar manda el objeto creado al componente padre: 'gragonball-super'
* en el comoponente padre está la señal con el array de objetos character.

* En el componente hijo declaramos el valor que vamos a emitir y su tipo
  newCharacter = output<Character>();
* Para ello utilizamos la función 'output' de @angular/core

* Desde el componente hijo emitimos la información una vez que añade el character en el formulario.
* Antes en el método de añadir añadíamos el nuevo Character a un array
* pero ahora emitimos el valor de nuevo character que ha rellenado el usuario
* porque el array de characters está en el componente padre
  addCharacter() {
    this.newCaracter.emit;
  }

* Ejempo componente hijo declarando lo que se va a emitir y emitiendo el objeto recogido:

export class CharacterAddComponent {
  newCharacter = output<Character>();
  addCharacter() {
    this.newCaracter.emit;
  }
}

* Ahora en el padre escuchamos el evento que se emite
no se emite el evento click, ni otros, solo se emite el evento: 'newCharacter' (this.newCaracter.emit;)
y para recoger el valor del evento emitido, recogemos en: "$event"
  <dragonball-character-add (newCaracter)="addCharacter($event)"/>

* En el ts declaramos el método para añadir el componente y actualizamos la señal
export class DragonballSuperPageComponent {
  addCharacter(newCharacter: Character) {
    this.characters.update((list)=>[...list,newCharacter]);
  }

****************************************************************(11/05/2025)
* Servicios
* Crear servicio DragonballService

* Inyectar servicios:

* Ejemplo1- Inyección tradicional en el contructor (Ya no se recomienda):
  export class DragonballSuperPageComponent {
    // Inyección tradicional en el contructor
    constructor(public dragonballService: DragonballService) {}

* Ejemplo2- Nueva forma de inyectar el servicio:
    public dragonballService = inject(DragonballService);

* Info:
export class DragonballSuperPageComponent {

  // Inyección tradicional en el contructor
  // constructor(public dragonballService: DragonballService) {}

  // Nueva forma de inyectar el servicio
  public dragonballService = inject(DragonballService);

}

****************************************************************(11/05/2025)
*Local storage vs Session storage

*1- Funcionan exactamente igual
*2- Se guardan key-value de strings
*3- No obstante se puede guardar un un objeto serializado como string

*Diferencias de entre Local storage vs Session storage
*4- Todo el contenido del Session storage se pierde cuando se cierra el navegador
*5- Todo el contenido persiste aunque el usuario reinicie el PC (no tiene espacio infinito)

****************************************************************(11/05/2025)
* Efectos (Effects):
* documentación

* Effects
  Un efecto es una operación que se ejecuta al menos una vez (similar al ngOnInit), 
  pero si usa alguna señal, y esa señal cambia, el efecto se vuelve a ejecutar.
  effect(() => {
    console.log(`The current count is: ${count()}`);
  });

* Los efectos nos van a servir para poder ejecutar o disparar un efecto secundario, o una acción secundaria
* El efecto no es más que una función que recibe un callback que es otra función
  que vamos a querer disparar cada vez que algo suceda
* Ejemplo, cada vez que nuestra señal 'count()' cambie, se va a ejecutar el console.log
  effect(() => {
    console.log(`The current count is: ${count()}`);
  });


* Ejemplo que guarda en el local storage, guarda la primera vez que se carga
  Y guardará todas las veces que el effect detecte que hay un cambio en la señal o en sus dependencias
  Como solo se puede guardar strings para guardar un objeto con el método JSON.stringify
  serializamos el objeto de foma que se guarda como:
  * key = 'characters'
  * value = '[{"id":1,"name":"Goku","power":9001},{"id":2,"name":"Vegeta","power":8000}]'

  saveToLocalStorage = effect(()=>{
    console.log(`Character count ${this.characters().length}`);
    localStorage.setItem('characters',JSON.stringify(this.characters()));
  });

****************************************************************(11/05/2025)
* Leer del local storage
* como sabemos que es un array deserializamos el objeto con JSON.parse

const loadFromLocalStorage = (): Character[] => {
  const characters = localStorage.getItem('characters');
  return characters ? JSON.parse(characters) : [];
}

* Si me los quiero traer a una nueva señal puede ser con:
  charactersLS = signal<Character[]>(loadFromLocalStorage());

****************************************************************(11/05/2025)
* Desplegar nuestra aplicación
1º- Borrar la carpeta: node_modules
2º- ejecutar el script: ng build para que se construya la carpeta de distribución
3º- abrir: https://www.netlify.com/ para hacer el despliegue de nuestra distribución
4º- arrastrar la carpeta 'browser' dentro de la carpeta de distrución
5º- En siteoverview nos muestra la url del despliegue en internet
6º- Por defecto, nos está dando un problema al cargar las páginas
7º- Necesitamos una estrategia de HashStrategy:
En el app.config.ts incluímos lo siguiente:

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // HashStrategy
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ]
};



****************************************************************(11/05/2025)
Aumentar tamaño Máquina Virtual VirtualBox

1ºEn VirtualBox ir a Administrador de medios virtuales...
y modificar el tamaño de la máquina virtual

2ºEntrar en la máquina virtual y desde windows ir a: administrador de discos
Como tenemos la Partición de recuperación de windows no se actualiza nuestro cambio
no tendremos disponible la opción de extender la partición de 50Gb que es la actual

3ºEliminar la partición de sistema de recuperación de windows
y tendremos que borrarla desde línea de comandos:
Entramos con cdm para eliminar la participación de recuperación
c:>diskpart --> Para entrar en DISKPART:
DISKPART>sel disk 0 --> Para seleccionar nuestro único disco duro
DISKPART>list part  --> Para listar las particiones del disco duro
DISKPART>sel part 3 --> Para seleccionar la partición de recuperación
DISKPART>delete partition override

4ºEntrar en la máquina virtual y desde windows ir a: administrador de discos
y cambiar el tamaño de la partición principal con botón derecho
y extender partición para añadir la nueva partición.

****************************************************************(11/05/2025)
* Para clonar un repositorio:
reneg@DESKTOP-LMA62OH MINGW64 /c/angular
$ git clone https://github.com/DevTalles-corp/angular-bases.git

* Y ahora instalar los módulos de la aplicación
reneg@DESKTOP-LMA62OH MINGW64 /c/angular/angular-bases (main)
$ npm install

git add .
git commit -m "Curso AngularV19"
git push -u origin main



