import { Component, OnInit } from '@angular/core';
import { ProductService } from '../home/Service/product.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [NgClass,RouterLink],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent  implements OnInit{
  id! : number
product:any={}
constructor( private productserve:ProductService , private route : ActivatedRoute)
{

}
ngOnInit() {
 
//activatedround

this.id = Number(this.route.snapshot.paramMap.get('id'));
this.productserve.readItem(this.id).subscribe((productdata)=>
{
  this.product = productdata;
}
);
}
}