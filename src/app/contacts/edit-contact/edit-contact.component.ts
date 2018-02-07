import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../shared/api.service'
import { ContactComponent } from '../contact/contact.component';
import { RouterModule, Routes, Router } from '@angular/router';


@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  constructor(private route: ActivatedRoute, public api: ApiService, private router: Router) { }

contactId;
//contactItem:object;
/*
	contactItem = [
		{
        "CompanyID": 8037691,
        "AccountId": "0",
        "CompanyName": "NEW A&S Supply",
        "StreetAddress": "583 School Street",
        "StreetAddress2": "",
        "City": "West New York",
        "State": "NJ",
        "Country": "",
        "ZipCode": "07093",
        "webSite": "",
        "CreatedDate": "2015-12-10T08:43:57.313",
        "Contacts": [
            {
                "ContactId": 603180604,
                "title": "President",
                "firstname": "Jim",
                "LastName": "Heady",
                "ContactCity": "West New York",
                "ContactState": "NJ",
                "ContactZip": "07093",
                "PrimaryPhone": "642-584-7436",
                "ext": "",
                "MobilePhone": "",
                "fax": "",
                "email": "Jim@MyCompany.com",
                "ContactAddress": "583 School Street",
                "Contactaddress2": "",
                "HomePhone": "",
                "email2": "",
                "dept": "",
                "birthday": "Jan  1 1900 12:00AM"
            }
        ],
        "status": "Not Defined",
        "Type": "Miscellaneous"
    }
	];
*/
ngOnInit() {
  this.route.params.subscribe( params => {
    (params['id'])
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
      this.getItem(data);
    });
}

getItem(obj){
  console.log(this.contactId)
for (var value of obj) {

  if(value.CompanyID == this.contactId){
      console.log(value);
      this.contactItem = value;
  };
}
}

goBack(){
  this.router.navigateByUrl('/contacts');
}


  deleteMe(){
    this.api.delete('/ptarmina/8589253')
    .subscribe(data => {
      this.goBack()
   });
}

}

