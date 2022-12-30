import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  cartQuantity = 0;
  constructor(
    cartService: CartService,
    private readonly dataservice: DataService
  ) {
    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    });
  }

  ngOnInit(): void {}

  getEmail(): string {
    return this.dataservice.email;
  }
}
