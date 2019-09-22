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

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  collapse() {
    this.isNavbarCollapsed = true;
  }

  login(){
      this.dialog.open(LoginComponent);
      
  }

}
