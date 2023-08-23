import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

constructor(private router:Router){

}
back(){

  
   this.router.navigate(['products']).then(r=>{
    console.log('navigate')
   })  //products/add/
  //this.router.navigateByUrl('products')
}

}
