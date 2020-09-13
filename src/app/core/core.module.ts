import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpCommunicationsService } from './HttpCommunications/http-communications.service';



@NgModule({
  declarations: [],
  providers: [HttpCommunicationsService],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
