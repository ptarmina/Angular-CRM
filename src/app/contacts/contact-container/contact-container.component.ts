import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../shared/api.service'
import { UtilitiesService } from '../../shared/utilities.service'

@Component({
  selector: 'app-contact-container',
  templateUrl: './contact-container.component.html',
  styleUrls: ['./contact-container.component.css']
})
export class ContactContainerComponent implements OnInit {

  isResults = false;

  constructor( public api: ApiService ) { }
1
  ngOnInit() {

  	this.api.get('/ptarmina')
  	.subscribe ( data => {[[[[[[[[[[[[[]]]]]]]]]]]]]
      this.isResults = true;
  	});


  }

}
