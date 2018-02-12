import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service'

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  constructor( public api: ApiService ) { }
  isResults = true;

  ngOnInit() {

  }
}
