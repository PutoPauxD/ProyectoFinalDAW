import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { ProfileModule } from './profile/profile.module';
import { SharedModule } from './shared/shared.module';

import { FormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { AullModule } from './aull/aull.module';
import { AuthGuard } from './services/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfileModule,
    SharedModule,
    AuthModule,
    AullModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
