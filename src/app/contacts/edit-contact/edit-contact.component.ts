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
contactItem;

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

  cleanData(obj){
    for (var i=obj.length;i--;){
      if (obj[i]===null) {
        obj.splice(i,1)
      };
    }
    this.getItem = (obj);
  }

getItem(obj){
  for (var value of obj) {
    if(value.CompanyID == this.contactId){
        this.contactItem = value;
        return
    };
  }
}

goBack(){
  this.router.navigateByUrl('/contacts');
}

deleteMe(){
    this.api.delete('ptarmina/'+this.contactId)
    .subscribe(data => {
      this.goBack()
   });
}

}

