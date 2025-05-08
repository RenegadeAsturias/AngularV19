import { Component, signal } from "@angular/core";

@Component({
  selector: 'counter-page-component',
  templateUrl : './counter-page.component.html',
  styleUrls: ['./counter-page.component.css']
})
export class CounterPageComponent {
  counter: number = 15;
  counterSignal = signal(15);

  increaseBy(value: number) {
    this.counter += value;
    this.counterSignal.update(current=>current+value);
  }

  reset() {
    this.counter = 0;
    this.counterSignal.set(0);
  }

}
