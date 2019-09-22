import { Component, OnInit } from '@angular/core';
import { History } from 'src/app/models/history';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

  history: History[];
  
  constructor() { 
    this.history = [];
    this.history.push(
      new History(
        '21-3-2019',
        'Istishari',
        '3'
      ),
      new History(
        '21-3-2018',
        'Bashir',
        '1'
      ),
      new History(
        '23-5-2019',
        'Maqased',
        '2'
      ),
    )

  }

  ngOnInit() {
  }

}
