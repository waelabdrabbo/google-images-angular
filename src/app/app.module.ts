import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ImagesListComponent } from './images-list/images-list.component';
import { ImagesServicesComponent, ImagesService } from './images-services/images-services.component';
import { FooterComponent } from './footer/footer.component';
import {MatExpansionModule} from '@angular/material/expansion';
import * as $ from 'jquery';
import {enableProdMode} from '@angular/core';
enableProdMode();
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImagesListComponent,
    ImagesServicesComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  providers: [
    ImagesService,
    HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
