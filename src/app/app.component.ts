import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from "./button/button.component";
import { ProductsService, Product } from './products.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private productService: ProductsService) { }

  title = 'angular-18-test';
  products: Product[] = [];
  loginUser = false;

  getTittle() {
    return this.title;
  }

  getProducts() {
    this.productService.getProducts().subscribe(products => this.products = products);
  }

  async isLogin() {
    const isLogin = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    }) as boolean;

    this.loginUser = isLogin;
  }
}
