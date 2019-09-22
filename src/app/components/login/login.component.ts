import { Component, OnInit } from '@angular/core';
import { SigninService } from 'src/app/services/signin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private singinService: SigninService) { }

  ngOnInit() {
   
  }

  
  loginWithGoogle(){

    this.singinService.GoogleLogin();

  }


 

}
