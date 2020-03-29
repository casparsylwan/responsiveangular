import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TeximateModule } from 'ngx-teximate';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { HomefrontComponent } from './components/homefront/homefront.component';
import { KeytextComponent } from './components/keytext/keytext.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    HomefrontComponent,
    KeytextComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TeximateModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
