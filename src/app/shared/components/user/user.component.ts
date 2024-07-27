import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iusers } from '../../models/users.interface';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userId!:string;
  userObj !: Iusers
  constructor(
    private _routes : ActivatedRoute,
    private _userService : UsersService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this.userId=this._routes.snapshot.params['userId'];
    if(this.userId){
      this.userObj=this._userService.getUserData(this.userId)
    }
  }

  
  onUserRemove(){
    if(this.userId){
      this._userService.removeUser(this.userId)
    }
  }

  onUserEdit(){
    this._router.navigate(['editUSer'],{
      relativeTo : this._routes,
      queryParamsHandling : 'preserve'
    })
  }
}
