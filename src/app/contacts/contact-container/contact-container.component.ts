import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../shared/api.service'
import { UtilitiesService } from '../../shared/utilities.service'

@Component({
  selector: 'app-contact-container',
  templateUrl: './contact-container.component.html',
  styleUrls: ['./contact-container.component.css']
})
export class ContactContainerComponent implements OnInit {

  isResults = true;

  contacts;

  constructor( public api: ApiService ) { }

  ngOnInit() {

  	//this.api.get('/ptarmina')
    /*
  	.subscribe ( data => {
      this.contacts = data;
      this.isResults = true;
      console.log(this.contacts)

  	});
*/

  }

}
