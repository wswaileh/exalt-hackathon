import { Component, OnInit } from '@angular/core';
import { MatDialog , MatDialogConfig } from '@angular/material'
import { LoginComponent } from '../login/login.component';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  title: String = "Blood Donation";
  isNavbarCollapsed = true;

  userType: number; //1 GUEST - 2 USER - 3 Hospital - 4 ADMIN

  constructor(private dialog: MatDialog ,private auth: AngularFireAuth , private router: Router) {

    auth.authState.subscribe(user =>{
      if(user){
        dialog.closeAll();
      }
    })

   }

  ngOnInit() {
    this.userType = 1;
  }

  collapse() {
    this.isNavbarCollapsed = true;
  }

  login(){
      this.dialog.open(LoginComponent);
      
  }

  isLoggedIn(): boolean {
    const  user  =  JSON.parse(localStorage.getItem('user'));
    return  user  !==  null;
  
}

async logout(){

  if(localStorage.getItem("role") != "admin" && localStorage.getItem("role") != "hospital"){
  await this.auth.auth.signOut();
  localStorage.removeItem('user');
  
  }

  localStorage.setItem("role", "guest");

  this.router.navigate(['/home']);


}

}
