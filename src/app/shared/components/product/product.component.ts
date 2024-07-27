import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iusers } from '../../models/users.interface';
import { UsersService } from '../../services/users.service';
import { Iproduct } from '../../models/products.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  prodId!:string;
  prodObj !: Iproduct
  constructor(
    private _routes : ActivatedRoute,
    private _prodService : ProductsService
  ) { }

  ngOnInit(): void {
    this.prodId=this._routes.snapshot.params['productId'];
    if(this.prodId){
      this.prodObj=this._prodService.getProductDetails(this.prodId)
    }
  }

  onProductRemove(){
    if(this.prodId){
      this._prodService.removeProduct(this.prodId)
    }
  }

}
