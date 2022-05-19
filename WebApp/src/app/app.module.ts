import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicModule } from './auth/public.module';
import { HomeComponent } from './functionalities/home/home.component';
import { ProfileComponent } from './functionalities/profile/profile.component';
import { SearchComponent } from './functionalities/search/search.component';
import { MessagesComponent } from './functionalities/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    SearchComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    PublicModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
