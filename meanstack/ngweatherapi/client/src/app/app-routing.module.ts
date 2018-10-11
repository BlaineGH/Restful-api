import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DallasComponent } from "./city/dallas/dallas.component";
import { SeattleComponent } from "./city/seattle/seattle.component";
import { SanjoseComponent } from "./city/sanjose/sanjose.component";
import { BurbankComponent } from "./city/burbank/burbank.component";
import { WashingtonComponent } from "./city/washington/washington.component";
import { ChicagoComponent } from "./city/chicago/chicago.component";

const routes: Routes = [
	{path:"", component: DallasComponent},
	{path:"dallas", component: DallasComponent},
	{path:"seattle", component: SeattleComponent},
	{path:"sanjose", component: SanjoseComponent},
	{path:"burbank", component: BurbankComponent},
	{path:"washington", component: WashingtonComponent},
	{path:"chicago", component: ChicagoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
