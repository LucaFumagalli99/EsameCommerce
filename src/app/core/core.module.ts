import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpCommunicationsService } from './HttpCommunications/http-communications.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  providers: [HttpCommunicationsService],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class CoreModule { }
