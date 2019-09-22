import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { FetchAllUsersService } from 'src/app/services/fetch-all-users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  allUser: User[]
  constructor(private allUserService: FetchAllUsersService) { }

  ngOnInit() {
    // this.allUser=[new User("hani","hani.m11@hotmail.com","0595061389","Ramallah","A+"),
    // new User("waleed","waleed.s@hotmail.com","0598061354","Ramallah","A+"),
    // new User("steve","steve.m@hotmail.com","0599212125","Jenin","B+"),
    // new User("khaled","khaled.o@hotmail.com","0595865321","Nablus","O+"),
    // new User("sara","sara.ahmed@hotmail.com","0595061381","Ramallah","A+")]

    this.allUserService.getAllUsers().subscribe(
      (res:any) => {
        this.allUser=res;
        
      }
    );

    // this.allUserService.getAllUsers().subscribe((data:any) =>{this.allUser=data})

  }


}
