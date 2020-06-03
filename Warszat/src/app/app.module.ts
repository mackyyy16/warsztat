import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AddApplicationComponent } from './add-application/add-application.component';
import { ReviewApplicationComponent } from './review-application/review-application.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { AddPartsComponent } from './add-parts/add-parts.component';
import { ReviewPartsComponent } from './review-parts/review-parts.component';
import { ReviewApplicationWorkerComponent } from './review-application-worker/review-application-worker.component';

@NgModule({
  declarations: [
    AppComponent,
    AddApplicationComponent,
    ReviewApplicationComponent,
    LoginComponent,
    RegisterComponent,
    AddPartsComponent,
    ReviewPartsComponent,
    ReviewApplicationWorkerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
