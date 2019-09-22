import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-hospital-add-emergency',
  templateUrl: './hospital-add-emergency.component.html',
  styleUrls: ['./hospital-add-emergency.component.scss']
})
export class HospitalAddEmergencyComponent implements OnInit {

  bloodTypes: String[];

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.bloodTypes = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']
  }

}
