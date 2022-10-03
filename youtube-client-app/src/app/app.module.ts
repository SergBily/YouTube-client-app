import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import AuthorizationModule from './authorization/authorization.module';
import YoutubeModule from './youtube/youtube.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YoutubeModule,
    BrowserAnimationsModule,
    AuthorizationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule { }
