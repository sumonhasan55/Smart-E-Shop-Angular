import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {


 detailId =123;


 products = [
  {
    id:1,
    img:'https://mdbootstrap.com/img/Photos/Others/img9.jpg',
    title:'Phone Bag',
  },
  {
    id:2,
    img:'https://mdbootstrap.com/img/Photos/Others/img3.jpg',
    title:'Paper Bag',
  }
 ]
}
