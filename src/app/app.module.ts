import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { HomefrontComponent } from './components/homefront/homefront.component';
import { KeytextComponent } from './components/keytext/keytext.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    HomefrontComponent,
    KeytextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
