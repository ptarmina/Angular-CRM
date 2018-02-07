import { Component, OnInit, ViewChild } from '@angular/core';
import { Http, Response } from '@angular/http'

import { MatTableDataSource } from '@angular/material/table'
import {MatPaginator, MatSort} from '@angular/material';

import { ApiService } from '../../shared/api.service'

@Component({
  selector: 'app-contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.css']
})
export class ContactTableComponent implements OnInit {

  constructor( public api: ApiService ) { }

  displayedColumns = ['CompanyName','Name', 'Created'];
  dataSource = new MatTableDataSource();

  resultsLength = 0;
  isLoadingResults = true;

  @ViewChild(MatSort) sort: MatSort;

  //tableDataSource = new MatTableDataSource(this.data);
  ngOnInit() {
    this.api.get('ptarmina')
    .subscribe ( data => {

      this.dataSource.data = data;

    });
  }

}