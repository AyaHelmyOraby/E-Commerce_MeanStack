import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../environments/environment' ;// Import environment

export interface Category {
  id: number;
  name: string;
  image ?: string; // If you want to include the category image
}

export interface Product {
  id?: number;
  title: string;
  description: string;
  category: Category; // Change category to be of type Category
  price: number | null;
  image: string;
  // rating?: { rate: number; count: number }; // Uncomment if using rating
}

// // product.model.ts
// export interface Product {
//   id?: number; // Optional for newly created products
//   title: string;
//   description: string;
//   price: number | null;
//   categoryId: number; // Use categoryId instead of category
//   images: string[];
// }


@Injectable({
  providedIn: 'root'  // Service is provided globally
})
export class ProductService {
  private apiUrl = environment.apiUrl;  // Using environment variable for the API URL

  constructor(private http: HttpClient) {}

  // Get list of products
  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl).pipe(
      catchError(this.handleError)  // Error handling
    );
  }

  // Get a single product by its ID
  readItem(product_id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${product_id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Update a product by its ID
  // updateItem(product_id: number, updatedProduct: Product): Observable<Product> {
  //   return this.http.put<Product>(`${this.apiUrl}/${product_id}`, updatedProduct).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  updateItem(id: number, product: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, product);
  }

  // Delete a product by its ID
  deleteItem(product_id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${product_id}`).pipe(
      catchError(this.handleError)
    );
  }

  // // Create a new product
  // createItem(newProduct: Product): Observable<Product> {
  //   return this.http.post<Product>(this.apiUrl, newProduct).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  // createItem(product: Product): Observable<Product> {
  //   return this.http.post<Product>(`${this.apiUrl}/`, product).pipe(
  //     catchError(this.handleError)  // Error handling
  //   );
  // }
  createItem(product: any): Observable<any> {
    // Append the necessary endpoint for creating a product
    return this.http.post<any>(`${this.apiUrl}/`, product);
  }

  // Error handling logic
  private handleError(error: any): Observable<never> {
    console.error('An error occurred', error);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}
