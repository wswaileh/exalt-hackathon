import { Component, OnInit, Input } from '@angular/core';
import { SigninService } from 'src/app/services/signin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {




  
  email: string;
  password: string;

  constructor(private singinService: SigninService , private router: Router) { }

  ngOnInit() {
   
  }

  
  loginWithGoogle(){

    this.singinService.GoogleLogin();

  }

  loginWithEmailAndPassword(){


    if(this.email == "admin@admin" && this.password == "admin"){
      this.router.navigate(['/admin']);
      localStorage.setItem("role", "admin");
    }else if(this.email.length != 0 && this.password.length !=0){
      this.singinService.loginWithEmailAndPassword(this.email,this.password);
    }

  }


 

}
