import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data = [
   {name:"nikon D150",price:500, mp:22, weight:'200 Gram'},
   {name:"nikon D70",price:520, mp:12, weight:'215 Gram'},
   {name:"nikon D800",price:800, mp:14, weight:'533 Gram'},
   {name:"nikon D50",price:200, mp:53, weight:'12 Gram'},
   {name:"nikon D850",price:530, mp:15, weight:'644 Gram'}
  ]
  constructor() { }

  getByName(name){
    for(let i = 0; i!=this.data.length;i++){
      if(name === this.data[i]['name'] ){
        console.log(this.data[i]);
        return this.data[i];
      };
    };
  }
  getAll(){
    return this.data;
  }
}
