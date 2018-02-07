import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestOptions, RequestMethod, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment'

@Injectable()
export class ApiService {

	private apiUrl = environment.apiUrl;

  constructor(private http: Http) { }

  data;

  get(url:string){
    this.data = this.request(url, RequestMethod.Get);
  	return this.data;
  }

/*
  getItem(url:string, id:number){
    console.log('id '+id)
    if(!this.data){
    this.data = this.request(url, RequestMethod.Get);
      return this.returnItem(this.data);
    }else{
      return this.returnItem(this.data);
    }

  }
  returnItem(it){
    console.log(it);
    return it;
  }
  */
  post(url:string, body:Object){
  	return this.request(url, RequestMethod.Post);
  }

	put(url:string, body:Object){
  	return this.request(url, RequestMethod.Put);
  }

  delete(url:string){
  	return this.request(url, RequestMethod.Delete);
  }

  request(url:string, method:RequestMethod, body?:Object){

  	const headers = new Headers();
  	headers.append('Content-Type', 'application/json');

  	const requestOptions = new RequestOptions({
			url: this.apiUrl+url,
			method: method,
			headers: headers
  	});

  	if(body){
  		requestOptions.body = body;
  	}

 		const request = new Request(requestOptions);

 			return this.http.request(request)
 			.map((res: Response) => res.json());

  }



}
