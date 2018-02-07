import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../shared/api.service'

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  contactForm: FormGroup;
  obj = [];


  constructor(private fb: FormBuilder, public api: ApiService ) { }

  ngOnInit() {
    this.createForm();
  }


/*
    ngOnInit() {
        this.myForm = this._fb.group({
            name: ['', [Validators.required, Validators.minLength(5)]],
            addresses: this._fb.array([
                this.initAddress(),
            ])
        });
    }

    initAddress() {
        return this._fb.group({
            street: ['', Validators.required],
            postcode: ['']
        });
    }
*/

  createForm() {
    this.contactForm = this.fb.group({

        CompanyID: ['7654321'],
        AccountId: ['999999'],
        CompanyName: ['My Company'],
        StreetAddress: ['123 state st'],
        StreetAddress2: ['321 state st'],
        City: ['SLC'],
        State: ['Ut'],
        Country: ['usa'],
        ZipCode: ['00000'],
        webSite: ['lalala.com'],
        CreatedDate: ['asdasdasd'],

      	Contacts: this.fb.group(
      		this.initContact(),
      		),

    /*
		Contacts: this.fb.group(
				{ // <-- the child FormGroup

       		ContactId: ['123456789'],
          title: ['VP'],
          firstname: ['Rico'],
          LastName: ['Suave'],
          ContactCity: ['SLC'],
          ContactState: ['Ut'],
          ContactZip: ['00000'],
          PrimaryPhone: ['111-222-3333'],
          ext: ['666'],
          MobilePhone: ['999-888-7777'],
          fax: [''],
          email: ['rico@suave.com'],
          ContactAddress: ['123 main'],
          Contactaddress2: ['321 main'],
          HomePhone: ['555-666-7777'],
          email2: [''],
          dept: ['sales'],
          birthday: ['']
      }),*/

    });
  }

initContact() {
        // initialize our contact
        var obj = {ContactId:'123456789'};

        console.log(obj)
        return ({

            ContactId: ['123456789'],
            title: ['VP'],
            firstname: ['Rico'],
            LastName: ['Suave'],
            ContactCity: ['SLC'],
            ContactState: ['Ut'],
            ContactZip: ['00000'],
            PrimaryPhone: ['111-222-3333'],
            ext: ['666'],
            MobilePhone: ['999-888-7777'],
            fax: [''],
            email: ['rico@suave.com'],
            ContactAddress: ['123 main'],
            Contactaddress2: ['321 main'],
            HomePhone: ['555-666-7777'],
            email2: [''],
            dept: ['sales'],
            birthday: ['']

        });
    }

onSubmit(data) {
	console.log(data)

    };




}










/*
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

*/


