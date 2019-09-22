import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  display:number;

  constructor(private router:Router, private active:ActivatedRoute) { }

  ngOnInit() {
    if (this.active.snapshot.params['id'])
      this.display = this.active.snapshot.params['id'];
    else
      this.display = 0;
  }
  logout(){
    this.router.navigate(['/home'])
  }

}
