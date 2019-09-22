import { Component, OnInit, ɵbypassSanitizationTrustResourceUrl } from '@angular/core';
import { History } from 'src/app/models/history';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

  origHistory: History[];
  history: History[];

  hospital: string;
  numOfBloodUnits: string;

  constructor() {
    this.origHistory = [];
    this.origHistory.push(
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
    this.history = [...this.origHistory];

  }

  ngOnInit() {
  }


  searchByNum() {
    if (this.numOfBloodUnits == "")
      this.history = [...this.origHistory];
    else
      this.history = this.history.filter(
        (entry) => {
          if (entry.numOfBloodUnits == this.numOfBloodUnits)
            return true;
          return false;
        }
      );
  }

  searchByHospital() {
    if (this.hospital == "")
      this.history = [...this.origHistory];
    else
      this.history = this.history.filter(
        (entry) => {
          if (entry.hospital.toLowerCase().startsWith(this.hospital.toLowerCase()))
            return true;
          return false;
        }
      );
  }
}
