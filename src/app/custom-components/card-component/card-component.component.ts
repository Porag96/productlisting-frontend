import { HttpClient } from '@angular/common/http';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css'],
})
export class CardComponentComponent {
  @Input() product!: Product;
  @Input() imgPath!: string;
  @Input() productId!: number;

  newData!: boolean;
  constructor(private http: HttpClient) {}

  onCheckboxClick(product: Product) {
    this.newData = !product.isActive;
    console.log(this.newData);
    const data = { isActive: this.newData };
    this.http
      .put<any>(`http://localhost:8000/api/v1/update/${product.id}`, data)
      .subscribe(
        (res) => {
          console.log(res);
          product.isActive = !product.isActive;
        },
        (err) => {
          console.log(err);
          if (err.status == 400) {
            console.log(err);
          }
        }
      );
  }
}
