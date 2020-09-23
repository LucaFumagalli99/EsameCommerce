import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { addToCart} from 'src/app/redux/cart/cart.actions';
import { Product } from 'src/app/core/model/product';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customize',
  templateUrl: './customize.component.html',
  styleUrls: ['./customize.component.scss'],
})
export class CustomizeComponent implements OnInit {
  customizeForm: FormGroup;
 constructor(private store:Store, private fb: FormBuilder,private route: ActivatedRoute) {}

  ngOnInit(): void {

    
    this.customizeForm = this.fb.group({
      prezzo: ['', Validators.required],
      tipoMerce: ['',Validators.required],
      Anime: ['', Validators.required],
    });
  }
  addToCart(){
    let product:Product=this.customizeForm.value;
    this.store.dispatch(addToCart({product}));
  }
 

}
