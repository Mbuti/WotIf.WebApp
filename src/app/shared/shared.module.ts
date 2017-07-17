import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParticipantChangedEvent, TalentChangedEvent } from './events';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [

  ],
  exports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
