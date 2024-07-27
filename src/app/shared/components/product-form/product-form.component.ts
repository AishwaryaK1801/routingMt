import { Component, OnInit } from '@angular/core';
import { Iusers } from '../../models/users.interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { UuidService } from '../../services/uuid.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  constructor(
    private _route : ActivatedRoute,
    private _productService : ProductsService,
    private _uuid : UuidService
  ) { }

  isInEditMode : boolean = false;
  userId !: string
  userObj!:Iusers

  userForm !: FormGroup
  ngOnInit(): void {
    this.createUserForm()

  }


  createUserForm(){
    this.userForm= new FormGroup({
      userName : new FormControl(null, Validators.required),  
    })
  }
}
