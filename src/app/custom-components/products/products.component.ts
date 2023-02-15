import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products!: any;

  checked: boolean = true;
  constructor(private http: HttpClient) {
    http.get('http://34.135.250.251/api/v1/products').subscribe((res) => {
      this.products = res;
    });
  }
}
