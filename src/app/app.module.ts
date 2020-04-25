import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { SEmpdetailsComponent } from './s-empdetails/s-empdetails.component';
import { EmpServicesService } from './emp-services.service';

@NgModule({
  declarations: [AppComponent, ServicesComponent, SEmpdetailsComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [EmpServicesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
