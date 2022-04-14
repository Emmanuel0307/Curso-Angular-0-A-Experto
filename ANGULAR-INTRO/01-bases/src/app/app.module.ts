import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { contadorModule } from './contador/contador.module';
import { heroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    heroesComponent,
    contadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
