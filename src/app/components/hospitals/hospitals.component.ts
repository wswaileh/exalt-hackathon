import { Component, OnInit } from '@angular/core';
import { Hospital } from 'src/app/models/Hospital';
import { HospitalsService } from 'src/app/services/hospitals.service';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.scss']
})
export class HospitalsComponent implements OnInit {
  allHospitals:Hospital[]
  constructor(private hospitalService:HospitalsService) { }

  ngOnInit() {
    this.hospitalService.getAllHospitals().subscribe(
      (res:any) => {
        this.allHospitals=res;
        
      }
    );
  }

}
