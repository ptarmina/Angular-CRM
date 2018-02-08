import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http'

import { ContactComponent } from '../contact/contact.component';
import { ApiService } from '../../shared/api.service'
import { UtilitiesService } from '../../shared/utilities.service'

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

	contactItems;
  isResults = false;

	constructor( public api: ApiService, public utility:UtilitiesService ) { }
  ngOnInit() {

  	this.api.get('/ptarmina')
  	.subscribe ( data => {
      this.contactItems = this.utility.cleanData(data);
      this.isResults = true;
    });
  }
}