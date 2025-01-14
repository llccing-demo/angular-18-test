import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Product {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Observable<Product[]> {
    const products: Product[] = [
      { id: 1, name: 'Product 3' },
      { id: 2, name: 'Product 4' },
    ];

    return of(products);
  }
}
