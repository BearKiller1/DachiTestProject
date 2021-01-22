import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './menu/home/home.component';
import { CompareComponent } from './menu/compare/compare.component';
import { NewsComponent } from './menu/news/news.component';
import { DetailComponent } from './menu/detail/detail.component';
import { ProdnotfoundComponent } from './menu/prodnotfound/prodnotfound.component';
import { PagenotfoundComponent } from './menu/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent,
  },
  {
    path:'compare',
    component:CompareComponent,
    children:[
      {
        path:'detail/:name',
        component:DetailComponent
      },
      {
        path:'**',
        component:ProdnotfoundComponent,
      },
    ]
  },
  {
    path:'news',
    component:NewsComponent,
  },
  {
    path:'**',
    component:PagenotfoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
