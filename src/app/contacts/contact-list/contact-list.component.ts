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


	constructor( public api: ApiService ) { }

  ngOnInit() {
  	this.api.get('/ptarmina')
  	.subscribe ( data => this.contactItems = data);
  }

}