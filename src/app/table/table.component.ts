import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {


  dtoptions:DataTables.Settings = {};
  dtTrigger:Subject<any>=new Subject<any>();

  constructor() { }

  ngOnInit(): void {
    this.dtoptions = {
      pagingType: 'full_numbers'
    }
  }

}
