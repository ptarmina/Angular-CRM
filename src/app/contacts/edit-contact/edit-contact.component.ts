import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Routes, Router } from '@angular/router';

import { ApiService } from '../../shared/api.service'
import { UtilitiesService } from '../../shared/utilities.service'

import { ContactComponent } from '../contact/contact.component';


@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

constructor(private route: ActivatedRoute, public api: ApiService, private router: Router, public utility:UtilitiesService ) { }

contactId;
contactItem;

ngOnInit() {
  this.route.params.subscribe( params => {
    (params['id'])
    //console.log( (params['id']) )
    this.setId((params['id']))
  });
}
setId(id){
  this.contactId = id;
  this.getItems();
}

getItems(){
    this.api.get('/ptarmina')
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
