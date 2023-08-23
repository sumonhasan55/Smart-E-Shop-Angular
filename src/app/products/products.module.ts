import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes =[
  {
    path:'',  //domain/product
    component:ProductsComponent
  },
  {
    path:'detail/:id',  //domain/product/detail
    component:ProductDetailsComponent
  }
]


@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductsModule { }
