import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { environment } from '../../environments/environment'

export interface Contact {
  CompanyID: string;
  it:number;
  id:string;
  }

@Injectable()
export class ContactService {

  contacts: Observable<Contact[]>
  public _contacts: BehaviorSubject<Contact[]>;
  private baseUrl: string;
  public dataStore: {
    contacts: Contact[]
  };

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://devapp.telenotes.com/api/data';
    this.dataStore = { contacts: [] };
    this._contacts = <BehaviorSubject<Contact[]>>new BehaviorSubject([]);
    this.contacts = this._contacts.asObservable();
  }

  loadAll() {
    this.http.get<Contact[]>(`${this.baseUrl}/rico`).subscribe(data => {
      this.dataStore.contacts = data;


      this._contacts.next(Object.assign({}, this.dataStore).contacts);
    }, error => console.log('Could not load contacts.'));
  }

  get(){
      return this.dataStore.contacts;
  }


load(id: string) {
    this.http.get(`${this.baseUrl}/rico`).subscribe(data => {

      this.dataStore.contacts.forEach((item, index) => {
        if (id == item['CompanyID']) {
          console.log(this.dataStore.contacts[index])
        }
      });

      this._contacts.next(Object.assign({}, this.dataStore).contacts);
    }, error => console.log('Could not load todo.'));
  }

}