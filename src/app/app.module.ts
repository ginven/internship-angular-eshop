import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { NgrxFormsModule } from 'ngrx-forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { CarouselComponent } from './common/carousel/carousel.component';
import { SiteDescComponent } from './common/site-desc/site-desc.component';
import { ProductsComponent } from './products/products.component';
import { AddFormComponent } from './add-form/add-form.component';
import { EditItemFormComponent } from './edit-item-form/edit-item-form.component';

import { environment } from 'src/environments/environment';
import { appReducer } from './_store';
import { ProductEffects } from './products.effects';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    ContentComponent,
    CarouselComponent,
    SiteDescComponent,
    ProductsComponent,
    AddFormComponent,
    EditItemFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(appReducer),
    !environment.production ? StoreDevtoolsModule.instrument():[],
    NgrxFormsModule,
    EffectsModule.forRoot([ProductEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
