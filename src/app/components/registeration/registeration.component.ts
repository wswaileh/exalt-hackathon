import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { SignupService } from 'src/app/services/signup.service';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss']
})
export class RegisterationComponent {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  haveDisease: String;
  phone: String;
  id_number: number;
  name: String;
  cities: String[];
  bloodTypes: String[];
  email: String;
  password: String;
  new_user: User;
  submitted = false

  constructor(private _formBuilder: FormBuilder,private toaster:ToastrService,
     private router: Router, private signUpService: SignupService) { }

  ngOnInit() {


    this.new_user = {
      name: '',
      email: '',
      password: '',
      phone: '',
      id: '',
      city: '',
      bloodType: ''
    }


    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.firstFormGroup = new FormGroup({
      haveDisease: new FormControl(),
   }); 
    this.secondFormGroup = this._formBuilder.group({
      fullName: ['', Validators.required],
      id_numberCheck: ['', [Validators.required, Validators.minLength(9)]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      city: ['', [Validators.required, Validators.minLength(10)]],
      bloodType: ['', [Validators.required, Validators.minLength(10)]]
    });
    this.thirdFormGroup = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(10)]],
    });
    this.cities = ['Ramallah', 'Jenin', 'Al-Qudis', 'Nablus']
    this.bloodTypes = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']

  }
  denied() {
    if (this.firstFormGroup.get('haveDisease').value==='yes') {
      this.router.navigate(['/home'])
    } else {
      return true;
    }
  }
  get f() { return this.thirdFormGroup.controls; }

  onSubmit2() {
    this.submitted = true;

    if (this.thirdFormGroup.invalid) {
      this.toaster.error("error", "Wrong Email Or Password");
      return;
    }
    if (this.secondFormGroup.invalid) {
      this.toaster.error("error", "Wrong input data");
      return;
    }
    if (this.firstFormGroup.invalid) {
      this.toaster.error("error", "Please choose one");
      return;
    }
  }
  onSubmit(user: User) {

    this.new_user = {
      name: user.name,
      email: user.email,
      password: user.password,
      phone: user.phone,
      id: user.id,
      city: user.city,
      bloodType: user.bloodType
    }
    this.signUpService.register(user)
  }


}
