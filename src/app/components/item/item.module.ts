import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [ItemComponent],
  imports: [
    FormsModule,
    IonicModule,
    CommonModule
  ],
  exports: [ItemComponent]
})
export class ItemModule { }
