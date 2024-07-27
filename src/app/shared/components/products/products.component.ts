import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../models/products.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
    private _productService : ProductsService
  ) { }

  getProducts !: Array<Iproduct>;

  ngOnInit(): void {
    this.getProducts=this._productService.fetchProducts()
  }


}
