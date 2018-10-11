import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

// ROUTING
import { AppRoutingModule } from './app-routing.module';

// COMPONENTS
import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';

// SERVICES
import { CityService } from "./city/city.service";
import { DallasComponent } from './city/dallas/dallas.component';
import { SeattleComponent } from './city/seattle/seattle.component';
import { SanjoseComponent } from './city/sanjose/sanjose.component';
import { BurbankComponent } from './city/burbank/burbank.component';
import { WashingtonComponent } from './city/washington/washington.component';
import { ChicagoComponent } from './city/chicago/chicago.component';

@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    DallasComponent,
    SeattleComponent,
    SanjoseComponent,
    BurbankComponent,
    WashingtonComponent,
    ChicagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [CityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
