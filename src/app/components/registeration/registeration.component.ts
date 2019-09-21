import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss']
})
export class RegisterationComponent {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  haveDisease: String;
  phone: String;
  id_number: number;
  name: String;
  cities: String[];
  bloodTypes: String[];
  email: String;
  password: String;
  new_user: User;

  constructor(private _formBuilder: FormBuilder, private router: Router, private signUpService: SignupService) { }

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
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
      id_numberCheck: ['', [Validators.required, Validators.minLength(9)]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(10)]],
    });
    this.cities = ['Ramallah', 'Jenin', 'Al-Qudis', 'Nablus']
    this.bloodTypes = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']

  }
  denied(str: String) {
    if (str === "yes") {
      this.router.navigate(['/home'])
    } else {
      return true;
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

    console.log(user)
    // this.signUpService.register(user);
    console.log("after >>>>>> " + this.signUpService.register(user))
  }


}
