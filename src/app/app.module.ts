import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToggleButtonComponent } from './custom-components/toggle-button/toggle-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ProductsComponent } from './custom-components/products/products.component';
import { CardComponentComponent } from './custom-components/card-component/card-component.component';
import { CarouselComponentComponent } from './custom-components/carousel-component/carousel-component.component';
import { ProductItemComponent } from './custom-components/product-item/product-item.component';
import { AddProductComponent } from './custom-components/add-product/add-product.component';
import { NavbarComponent } from './custom-components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomAlertComponent } from './custom-components/custom-alert/custom-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    ToggleButtonComponent,
    ProductsComponent,
    CardComponentComponent,
    CarouselComponentComponent,
    ProductItemComponent,
    AddProductComponent,
    NavbarComponent,
    CustomAlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
