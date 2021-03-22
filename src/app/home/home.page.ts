import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public checkAll = false;
  public items = [{name: 'Modalità Aereo', isOn: false}, {name: 'Wifi', isOn: false}, {name: 'Telefonate', isOn: true}];
  constructor() {}

  toggle(checkAll) {
    console.log('checkAll:', checkAll);
    this.items.forEach(element => element.isOn = checkAll);
  }

}
