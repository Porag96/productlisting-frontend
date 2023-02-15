import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  name!: string;
  price!: string;
  sku!: string;
  desc!: string;
  images = [];
  isActive!: boolean;

  alertSuccess: boolean = false;
  alertFailure: boolean = false;

  sucMsg = 'Product Stored Succesfully!';
  errMsg = 'Invalid Request!';

  sucClass = 'alert alert-success alert-dismissible fade show';
  errClass = 'alert alert-danger alert-dismissible fade show';

  constructor(private http: HttpClient) {}
  selectImages(event: any) {
    if (event.target.files.length > 0) {
      this.images = event.target.files;
    }
  }
  onSubmit() {
    const formData = new FormData();

    if (this.name == undefined) {
      this.alertFailure = true;
      this.errMsg = 'Name should not be empty';
    } else if (this.price == undefined) {
      this.alertFailure = true;
      this.errMsg = 'Price should not be empty';
    } else if (this.desc == undefined) {
      this.alertFailure = true;
      this.errMsg = 'Description should not be empty';
    } else if (this.sku == undefined) {
      this.alertFailure = true;
      this.errMsg = 'SKU should not be empty';
    } else if (this.sku.length > 8 || this.sku.length < 8) {
      this.alertFailure = true;
      this.errMsg = 'SKU should of 8 characters';
    } else {
      for (let img of this.images) {
        formData.append('images', img);
      }

      formData.append('name', this.name);
      formData.append('price', this.price);
      formData.append('sku', this.sku);
      formData.append('desc', this.desc);

      this.http
        .post<any>('http://localhost:8000/api/v1/product', formData)
        .subscribe(
          (res) => {
            this.alertSuccess = true;
            console.log(res);
          },
          (err) => {
            console.log(err);
            if (err.status == 400) {
              this.alertFailure = true;
              this.errMsg = err.error;
            }
          }
        );
    }
  }
}
