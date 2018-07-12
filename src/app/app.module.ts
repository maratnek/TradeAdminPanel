import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PanelComponent } from './components/panel/panel.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';

import {CryptoService} from './service/crypto.service';

import {HttpClient,HttpHandler} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    // CryptoService,
  ],
  providers: [
    CryptoService,
    HttpClient,
    HttpHandler,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
