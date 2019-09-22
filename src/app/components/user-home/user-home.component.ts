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
  date: string;
  constructor() {
    this.origHistory = [];
    this.origHistory.push(
      new History(
        'Thu Mar 21 2019 13:54:56 GMT+0200 (Israel Standard Time)',
        'Istishari',
        '3'
      ),
      new History(
        'Thu Jun 21 2018 00:00:00 GMT+0300 (Israel Daylight Time)',
        'Bashir',
        '1'
      ),
      new History(
        'Wed Mar 21 2018 14:03:19 GMT+0200 (Israel Standard Time)',
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
