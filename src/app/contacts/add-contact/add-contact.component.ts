import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../shared/api.service'
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatFormFieldControl } from '@angular/material/form-field'

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  constructor(private fb: FormBuilder, public api: ApiService ) { }


data =

{
  "CompanyID": 8673640,
  "AccountId": "",
  "CompanyName": "Uptown",
  "StreetAddress": "928 Clinton St.",
  "StreetAddress2": "",
  "City": "Naugatuck",
  "State": "CT",
  "Country": null,
  "ZipCode": "06770",
  "webSite": "",
  "CreatedDate": "2015-12-10T10:14:55.640",
  "Contacts": [
      {
          "ContactId": 623180923,
          "title": "",
          "firstname": "Gordon",
          "LastName": "Shelly",
          "ContactCity": "Naugatuck",
          "ContactState": "CT",
          "ContactZip": "06770",
          "PrimaryPhone": "",
          "ext": "",
          "MobilePhone": "",
          "fax": "",
          "email": "",
          "ContactAddress": "928 Clinton St.",
          "Contactaddress2": "",
          "HomePhone": "",
          "email2": "",
          "dept": "",
          "birthday": "Jan  1 1900 12:00AM"
      }
  ],
  "status": "",
  "Type": ""
}



  ngOnInit() {

  }

	putItem(){
    /*
			console.log(this.data)
			 JSON.stringify(this.data);
			 console.log(this.data)
     */
	    this.api.put('/ptarmina', this.data)
	    .subscribe ( data => {})
	}

}