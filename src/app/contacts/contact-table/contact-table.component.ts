import { Component, OnInit, ViewChild } from '@angular/core';
import { Http, Response } from '@angular/http'

import { MatTableDataSource } from '@angular/material/table'
import {MatPaginator, MatSort} from '@angular/material';

import { ApiService } from '../../shared/api.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.css']
})
export class ContactTableComponent implements OnInit {

  constructor( public api: ApiService, private router:Router ) { }

  displayedColumns = ['CompanyName','Name', 'Button'];
  dataSource = new MatTableDataSource();

  resultsLength = 0;
  isLoadingResults = true;

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.api.get('ptarmina')
    .subscribe ( data => {
      this.cleanData(data)

    });
  }

  cleanData(obj){
    for (var i=obj.length;i--;){
      if (obj[i]===null) {
        obj.splice(i,1)
      };
    }
    this.dataSource.data = obj;
  }

  getDetail(id){
    console.log("getDetail "+id);
    this.router.navigate(['/edit-contact/'+id]);

  }
}