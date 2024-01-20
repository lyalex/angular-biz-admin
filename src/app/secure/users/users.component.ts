import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  users: User[] = [];
  // page = 1;
  constructor( private http: HttpClient){
  }
  ngOnInit(): void {
    this.http.get<any>("http:/localhost:4200/api/users").subscribe(res => this.users = res.data);
  }

}
