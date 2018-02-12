import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Http, Response } from '@angular/http'

import { MatTableDataSource } from '@angular/material/table'
import {MatPaginator, MatSort} from '@angular/material';

import { ApiService } from '../../shared/api.service'
import { UtilitiesService } from '../../shared/utilities.service'
import { Contact, ContactService } from '../../shared/contact.service'

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';


import {Router} from '@angular/router';

@Component({
  selector: 'app-contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.css']
})
export class ContactTableComponent implements OnInit {
contacts: Observable<Contact[]>;


  constructor( public api:ApiService, public contactService: ContactService, private router:Router, public utility:UtilitiesService  ) { }

  displayedColumns = ['CompanyName','Name','Created', 'Button'];
  dataSource = new MatTableDataSource();

  resultsLength = 0;
  isLoadingResults = true;

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {


    //this.contactService.loadAll();
    //this.contacts = this.contactService.contacts;    //this.dataSource.data = this.contacts

//dataStore: {    contacts: Contact[]

    //console.log(this.contacts);
    //console.log(this.contactService.get())
    //this.contactData = this.contactService.contacts;
    //console.log(this.contactData)
    //this.dataSource.data = this.utility.cleanData(this.contactData);

    /*
    this.api.get('rico')
    .subscribe ( data => {
      console.log(data)//this.dataSource.data = data//this.utility.cleanData(data);
    });
    */

  }

  getDetail(id){
    this.router.navigate(['/edit-contact/'+id]);
  }
}