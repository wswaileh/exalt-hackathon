import { Component, OnInit, Input } from '@angular/core';
import { SigninService } from 'src/app/services/signin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {




  
  email: string;
  password: string;

  constructor(private singinService: SigninService) { }

  ngOnInit() {
   
  }

  
  loginWithGoogle(){

    this.singinService.GoogleLogin();

  }

  loginWithEmailAndPassword(){

      console.log(this.email)
    if(this.email.length != 0 && this.password.length !=0){
      this.singinService.loginWithEmailAndPassword(this.email,this.password);
    }

  }


 

}
