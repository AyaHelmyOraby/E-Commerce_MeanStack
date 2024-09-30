import { Routes } from '@angular/router';
import { ProductService } from './home/Service/product.service';
import { HomeComponent } from './home/home.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ModalComponent } from './modal/modal.component';
import { ProductupdateComponent } from './productupdate/productupdate.component';
import { ProductcreateComponent } from './productcreate/productcreate.component';

export const routes: Routes = [
    { path: 'products', component: HomeComponent },
    // { path: 'series', component: SeriesComponent },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to home if no path is specified
    { path: 'productdetails/:id', component: ProductdetailsComponent 

    } ,// Route for specific movie details
   { path : 'modal', component :ModalComponent}
   , 
   {path : 'productupdate/:id' , component : ProductupdateComponent}
   ,
   {path : 'productcreate' , component : ProductcreateComponent}
    // { path: 'seriesdetails/:id', component: SeriesetailsComponent } ,

    
    // { path: '**', component: PagenotfoundComponent }  // Wildcard route for 404 page



];
