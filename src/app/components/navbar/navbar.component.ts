import { Component, OnInit } from '@angular/core';
import { MatDialog , MatDialogConfig } from '@angular/material'
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  title: String = "Blood Donation";
  isNavbarCollapsed = true;

  userType: number; //1 GUEST - 2 USER - 3 Hospital - 4 ADMIN

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    this.userType = 1;
  }

  collapse() {
    this.isNavbarCollapsed = true;
  }

  login(){
      this.dialog.open(LoginComponent);
      
  }

}
