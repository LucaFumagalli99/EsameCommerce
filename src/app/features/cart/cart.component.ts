import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Product } from 'src/app/core/model/product';
import { selectProducts } from 'src/app/redux/cart';
import { removeToCart } from 'src/app/redux/cart/cart.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products: Product[];
  constructor(private store:Store) {
  }

  ngOnInit(): void {
    this.store.pipe(select(selectProducts)).subscribe(products=>{
      this.products=products;
    });

  }

  returnImage(a:string):string{
    return "/assets/img/"+a+".jpeg";
  }

  remove(id:number){
    this.store.dispatch(removeToCart({id}));
  }

}

