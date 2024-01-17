import { Routes } from '@angular/router';
import { HomeProductComponentComponent } from './home-product-component/home-product-component.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


export const routes: Routes = [
    {path: '', component: HomeProductComponentComponent},
    {path: 'product-detail/:id', component: ProductDetailComponent},
];

