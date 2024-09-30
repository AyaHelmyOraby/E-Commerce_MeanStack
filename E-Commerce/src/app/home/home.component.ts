import { Component, NgModule, OnInit } from '@angular/core';
import { ProductService } from '../home/Service/product.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ModalComponent ,NgClass, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productlist: any[] = [];

  // Inject Router in the constructor
  constructor(private productserv: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productserv.getProductList().subscribe((productdata) => {
      console.log(productdata);
      this.productlist = productdata; // Assign the array directly
    });
  }

  deleteItem(product_id: number) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productserv.deleteItem(product_id).subscribe(
        (res) => {
          console.log('Product deleted successfully:', res);
          this.loadProducts();  // Call to refresh the product list
        },
        (error) => {
          console.error('Error deleting product:', error);
        }
      );
    }
  }
  
  // Add this method to refresh the product list
  loadProducts() {
    this.productserv.getProductList().subscribe((productdata) => {
      console.log(productdata);
      this.productlist = productdata; // Assign the array directly
    });
  }
  
}
