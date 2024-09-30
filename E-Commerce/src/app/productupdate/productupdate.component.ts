import { Component, NgModule, OnInit } from '@angular/core';
import { ProductService } from '../home/Service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgClass } from '@angular/common';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productupdate',
  standalone: true,
  imports: [NgClass, FormsModule],  // Ensure necessary modules are imported
  templateUrl: './productupdate.component.html',
  styleUrls: ['./productupdate.component.css']
})
export class ProductupdateComponent implements OnInit {
  id!: number;
  product: any = {};

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) {}

  // Method to fetch product data by ID
  getProductData() {
    this.productService.readItem(this.id).subscribe((res) => {
      this.product = res;  // Assign the fetched product data
    });
  }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));  // Fetch product ID from the route
    this.getProductData();  // Call to fetch product data
  }

  // Method to update product and navigate back to details
  updateItem(product_id: number) {
    // Example object with complete category information
const updatedProduct = {
  title: (document.getElementById('title') as HTMLInputElement).value,
  description: (document.getElementById('description') as HTMLTextAreaElement).value,
  category: {
    id: 1,  // Add the ID of the category
    name: (document.getElementById('category') as HTMLInputElement).value,  // Access the category name
    image: "https://i.imgur.com/QkIa5tT.jpeg"  // Provide a default or fetched image
  },
  price: Number((document.getElementById('price') as HTMLInputElement).value),
  image: this.product.image,  // Keep the same image (adjust as needed)
};

// Assuming you are using this object to call your update function
this.productService.updateItem(product_id, updatedProduct).subscribe((updatedData) => {
  this.product = updatedData;  // Update local data after response
  console.log('Product updated:', updatedData);
  
  // Navigate back to product details page
  this.router.navigate([`home`]);  // Adjust routing as needed
});


    // Update product data via service
    this.productService.updateItem(product_id, updatedProduct).subscribe((updatedData) => {
      this.product = updatedData;  // Update local data after response
      console.log('Product updated:', updatedData);

      // Navigate back to product details page
      // this.router.navigate([`productdetails/${product_id}`]);  // Adjust routing as needed
      this.router.navigate([`home`]);  // Adjust routing as needed

    });
  }
}
