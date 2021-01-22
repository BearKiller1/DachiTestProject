import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.sass']
})
export class CompareComponent implements OnInit {
  data:any;
  nameTmp:any;
  sub:any;
  prodList:any;
  prodDetail:any;
  prodDetail2:any;
  output = false;
  output2 = false;

  constructor(
    private Obj:DataService,
  ) { }

  ngOnInit(): void {
    
  }
  GetProdByName(name:any): void{
    if(this.output == false){
      this.output = true;
      this.prodDetail = this.Obj.getByName(name);
    }
    else if(this.output == true && this.output2 == false){
      this.output2 = true;
      this.prodDetail2 = this.Obj.getByName(name);
    }
    else if(this.output == true && this.output2 == true){
      this.prodDetail = this.Obj.getByName(name);
    }
  };
  GetAll(){
    this.prodList= this.Obj.getAll();
  }
}
