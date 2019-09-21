import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  title: String = "Blood Donation";
  isNavbarCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

  collapse() {
    this.isNavbarCollapsed = true;
  }

}
