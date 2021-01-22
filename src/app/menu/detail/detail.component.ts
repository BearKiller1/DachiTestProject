import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { DataService} from '../data.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {
  data:any;
  sub:any;
  constructor(
    private route:ActivatedRoute,
    private Obj:DataService
  ) { }

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe( tmp =>{
      var nameTmp = tmp.get('name');
      this.data = this.Obj.getByName(nameTmp);
    });
    
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
