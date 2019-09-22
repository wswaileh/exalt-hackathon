import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import {DonateRequest} from 'src/app/models/donate-req';
import { ToastrService } from 'ngx-toastr';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  haveDisease: String;
  name: String;
  cities: String[];
  hospitals: String[];
  new_user: User;
  new_donate_req: DonateRequest;

  submitted = false
  clickedForBlock = false
  @BlockUI() blockUI: NgBlockUI;

  constructor(private _formBuilder: FormBuilder, private toaster: ToastrService,
    private router: Router) { }

  ngOnInit() {


    this.new_donate_req = {
      email: '',
      hospital: '',
      date: '',
    }
    this.new_user = {
      name: '',
      email: '',
      password: '',
      phone: '',
      id: '',
      city: '',
      bloodType: ''
    }

    this.firstFormGroup = new FormGroup({
      haveDisease: new FormControl(),
    });
    this.secondFormGroup = this._formBuilder.group({
      city: ['', Validators.required],
      hospital: ['', Validators.required],
      date: ['', Validators.required],

    });
    this.thirdFormGroup = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.cities = ['Ramallah', 'Jenin', 'Al-Quds', 'Nablus']
    this.hospitals = ['Istishari', 'Razi', 'Nablus el thakhassusi', 'al re3ayeh']

  }
  denied() {
    if (this.firstFormGroup.get('haveDisease').value === 'no') {
      this.router.navigate(['/user-home']);
      this.toaster.error('Sorry');
    } else {
      return true;
    }
  }

  get f2() {
    return this.secondFormGroup.controls;
  }
  
  onSubmit(donateReq: DonateRequest,user: User) {

    this.new_donate_req = {
      email: 'waleed.s@hotmail.com',
      hospital: donateReq.hospital,
      date: donateReq.date,
    }
    console.log(this.new_donate_req);
    
  }
}