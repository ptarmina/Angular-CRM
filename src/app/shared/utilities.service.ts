import { Injectable } from '@angular/core';

@Injectable()
export class UtilitiesService {

  constructor() { }

  cleanData(obj){
  	//console.log("cleanData")
    for (var i=obj.length;i--;){

      if (obj[i]===null) {
        obj.splice(i,1)
      };
    }
    return obj;
  }
	getItemById(obj,id){
		//console.log("getItemById")
		obj = this.cleanData(obj);
	  for (var value of obj) {
	    if(value.CompanyID == id){
          obj = null;
	        return value
	    };
	  }
	}
}