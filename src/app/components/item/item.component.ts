import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit, OnChanges {
  @Input() name = '';
  @Input() isOn = false;
  public description = '';
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes:', changes.isOn);
  }

  ngOnInit() {}

  toggle(isOn) {
    if (isOn === false) {
      this.description = '';
    }
  }
}
