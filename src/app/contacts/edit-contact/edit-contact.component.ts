import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Routes, Router } from '@angular/router';

import { ApiService } from '../../shared/api.service'
import { UtilitiesService } from '../../shared/utilities.service'
//import { Contact, ContactService } from '../../shared/contact.service'

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-edit-contact',
  templateUrl:'./edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']

})
export class EditContactComponent implements OnInit {

//contacts: Observable<Contact[]>;
contactId: string;
contactItem;

constructor(private route: ActivatedRoute,
            public api:ApiService,
            //public contactService: ContactService,
            private router: Router,
            public utility:UtilitiesService ) { }

ngOnInit() {
  this.route.params.subscribe( params => {
    (params['id'])
    this.setId((params['id']))

    //this.setId((params['id']))
    //this.contactService.loadAll();

  });
}

setId(id){
  this.contactId = id;
  this.getItems();
}

getItems(){
    this.api.get('/rico')
    .subscribe ( data => {
      this.contactItem = this.utility.getItemById(data, this.contactId);
    });
}
goBack(){
  this.router.navigateByUrl('/contacts');
}

deleteMe(){
    console.log("diabled due to api issues")
    /*
    this.api.delete('ptarmina/'+this.contactId)
    .subscribe(data => {
      this.goBack()
   });
   */
}

editMe(){
    console.log("future enhancment")
}
}
