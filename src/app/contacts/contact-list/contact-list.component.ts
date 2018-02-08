import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http'

import { ContactComponent } from '../contact/contact.component';
import { ApiService } from '../../shared/api.service'


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

	contactItems;
  isResults = false;

	constructor( public api: ApiService ) { }
  ngOnInit() {

  	this.api.get('/ptarmina')
  	.subscribe ( data => {
      this.isResults = true;
      this.cleanData(data)
    });
  }

  cleanData(obj){
    for (var i=obj.length;i--;){

      if (obj[i]===null) {
        obj.splice(i,1)
      };
    }
    this.contactItems = obj
  }

}