import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { NgrxFormsModule } from 'ngrx-forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { ContentComponent } from './components/content/content.component';
import { CarouselComponent } from './components/common/carousel/carousel.component';
import { SiteDescComponent } from './components/common/site-desc/site-desc.component';
import { ProductsComponent } from './components/products/products.component';
import { AddFormComponent } from './components/add-form/add-form.component';
import { EditItemFormComponent } from './components/edit-item-form/edit-item-form.component';

import { environment } from 'src/environments/environment';
import { appReducer } from './_store';
import { ProductEffects } from './state/products.effects';
import { UserEffects } from './auth/auth.effects';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { CartComponent } from './components/cart/cart.component';


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
    EditItemFormComponent,
    PageNotFoundComponent,
    LoginPageComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(appReducer, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictActionSerializability: true,
        strictActionTypeUniqueness: true
        }
    }),
    !environment.production ? StoreDevtoolsModule.instrument():[],
    NgrxFormsModule,
    EffectsModule.forRoot([ProductEffects, UserEffects]),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
