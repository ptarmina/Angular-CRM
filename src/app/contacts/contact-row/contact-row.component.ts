import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { Http, Response } from '@angular/http'

@Component({
  selector: 'app-contact-row',
  templateUrl: './contact-row.component.html',
  styleUrls: ['./contact-row.component.css']
})
export class ContactRowComponent implements OnInit {
	@Input() contact;
  isResults = false;

	constructor(private router:Router) { }
  ngOnInit() {

  }

  getDetail(id){
    this.router.navigate(['/edit-contact/'+id]);
  }

}
