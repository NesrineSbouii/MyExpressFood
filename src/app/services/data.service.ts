import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
import { Food } from '../shared/models/Food';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public email = 'nesrine@gmail.com';

  isValid(email: string) {
    return this.email === email;
  }
}
