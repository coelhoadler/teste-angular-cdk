import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PortalModule } from '@angular/cdk/portal';

import 'hammerjs';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    PortalModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    HeaderComponent,
    SectionComponent
  ]
})
export class AppModule { }
