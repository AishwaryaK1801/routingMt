import { Component, OnInit } from '@angular/core';
import { Iusers } from '../../models/users.interface';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(
    private _userSService : UsersService
  ) { }

  usersData !: Array<Iusers>
  ngOnInit(): void {
    this.usersData=this._userSService.fetchAllUsers()
  }

}
