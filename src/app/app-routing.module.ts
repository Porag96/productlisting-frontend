import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './custom-components/add-product/add-product.component';
import { ProductsComponent } from './custom-components/products/products.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'addProduct', component: AddProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
