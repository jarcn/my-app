import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'; // <-- NgModel lives here

import {HeroDetailComponent} from "./hero-detail.component";
import {HeroesComponent} from "./heroes.component";
import {HeroService} from "./hero.service";
import {DashboardComponent} from "./dashboard.component";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
