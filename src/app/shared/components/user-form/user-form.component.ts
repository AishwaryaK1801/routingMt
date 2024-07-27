import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Iusers } from '../../models/users.interface';
import { ProductsService } from '../../services/products.service';
import { UuidService } from '../../services/uuid.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  userForm!: FormGroup;
  isInEditMode:boolean =false;
  userId !: string ;
  userObj !: Iusers;
  userRole !: 'admin' | 'buyer';

  constructor(
    private _uuidService : UuidService,
    private _userService : UsersService,
    private _routes : ActivatedRoute,

    private _router : Router
  ) {}

  ngOnInit(): void {
    this.createUserForm();
    this.manageUserIdParams();
    this.manageQueryParams();
   
  }


  manageQueryParams(){
    console.log(this._routes);
    this.userRole=this._routes.snapshot.queryParams['userRole'];
    if(this.userRole){
      if(this.userRole==='buyer'){
        this.userForm.disable();
      }
      else{
        this.userForm.enable()
      }
    }
  }


  manageUserIdParams(){
    this.userId= this._routes.snapshot.params['userId']
    if(this.userId){
      this.isInEditMode=true
      this.userObj=this._userService.getUserData(this.userId);
      console.log(this.userObj);
      this.userForm.patchValue(this.userObj)
    }
    else{
      this.isInEditMode=false
    }
  }
  createUserForm(){
    this.userForm = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      personImg : new FormControl(null, [Validators.required]),
      userDetails : new FormControl(null, [Validators.required]),
      userRole : new FormControl(null, [Validators.required]),
    });
  }
  onUserAdd(){
    if(this.userForm.valid){
      let newUser = this.userForm.value
      console.log(newUser);
      this._userService.addUser({...newUser, userId:this._uuidService.generateUuid()})
      
    }
  }
  onUserUpdate(){
    let updatedObj = {...this.userForm.value,userId: this.userId};
    this._userService.updateUser(updatedObj)
  }
  onUserUpdateCancel(){
    // this.__dialog.openDialoge('confirmation',`Don't you want to update 👉 ${this.userObj.userName} user?`)
    // .subscribe(res=>{
    //   if(res){
        this._router.navigate(['/users'])
    //   }
    // })
  }
}
