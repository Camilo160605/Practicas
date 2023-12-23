import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './pages/productsPage/productsPage.component';
import { BootstrapPageComponent } from './pages/bootstrap-page/bootstrap-page.component';

const routes: Routes = [

  {
    path: '',
    children : [
      { path: 'products', component: ProductsPageComponent },
      { path: 'bootstrap', component: BootstrapPageComponent },
      { path: '**', redirectTo: 'products' }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
