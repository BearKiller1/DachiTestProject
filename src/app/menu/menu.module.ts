import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CompareComponent } from './compare/compare.component';
import { NewsComponent } from './news/news.component';
import { ProdnotfoundComponent } from './prodnotfound/prodnotfound.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DetailComponent } from './detail/detail.component';
import { Compare2Component } from './compare2/compare2.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [HomeComponent, CompareComponent, NewsComponent, ProdnotfoundComponent, PagenotfoundComponent, DetailComponent, Compare2Component],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[HomeComponent, CompareComponent, NewsComponent, ProdnotfoundComponent, PagenotfoundComponent, DetailComponent]
})
export class MenuModule { }
