import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http'

import { ContactComponent } from '../contact/contact.component';
import { ApiService } from '../../shared/api.service'
import { UtilitiesService } from '../../shared/utilities.service'
import { Contact, ContactService } from '../../shared/contact.service'

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-contact-rows',
  templateUrl: './contact-rows.component.html',
  styleUrls: ['./contact-rows.component.css']
})
export class ContactRowsComponent implements OnInit {
	contacts: Observable<Contact[]>;
  isResults = false;

	constructor( public contactService: ContactService, public utility:UtilitiesService ) { }

  ngOnInit() {
    this.contacts = this.contactService.contacts;
    this.contactService.loadAll();
  }
}
