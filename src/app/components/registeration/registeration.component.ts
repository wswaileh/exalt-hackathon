import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { SignupService } from 'src/app/services/signup.service';
import { ToastrService } from 'ngx-toastr';
import { BlockUI, NgBlockUI } from 'ng-block-ui';


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
  clickedForBlock = false
  @BlockUI() blockUI: NgBlockUI;

  constructor(private _formBuilder: FormBuilder, private toaster: ToastrService,
    private router: Router, private signUpService: SignupService) {



  }
  blockLoading() {
    this.clickedForBlock = true
    this.blockUI.start('Loading...'); // Start blocking

    setTimeout(() => {
      this.blockUI.stop(); // Stop blocking
      this.router.navigate(['/user-home'])
    }, 2000);
  }

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



    this.firstFormGroup = new FormGroup({
      haveDisease: new FormControl(),
    });
    this.secondFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      id_numberCheck: ['', [Validators.required, Validators.minLength(9)]],
      phone: ['', [Validators.required, Validators.minLength(9)]],
      city: ['', Validators.required],
      bloodType: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.cities = ['Ramallah', 'Jenin', 'Al-Qudis', 'Nablus']
    this.bloodTypes = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-']

  }
  denied() {
    if (this.firstFormGroup.get('haveDisease').value === 'yes') {
      this.router.navigate(['/home'])
    } else {
      return true;
    }
  }

  get f2() {
    return this.secondFormGroup.controls;
  }
  get f3() {
    return this.thirdFormGroup.controls;
  }

  onSubmit2() {
    this.submitted = true;

    if (this.thirdFormGroup.invalid) {
      this.toaster.error("error", "Wrong Email Or Password");
      return;
    }


  }

  onSubmit1() {
    this.submitted = true;


    if (this.secondFormGroup.invalid) {
      this.toaster.error("error", "Wrong input data");
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
    console.log(this.signUpService.register(user)
    )
  }


}
