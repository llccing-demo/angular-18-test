import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { of } from 'rxjs';
import { ProductsService } from './products.service';


/**
 * In the above example, we have created the mock implementation of the products service 
 * which contains the getProducts() function and returns the products array. 
 * We provided a MockProductService instead of an actual product service.
 * 
 */
class MockProductsService {
  getProducts() {
    const mockProjects = [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
    ];
    return of(mockProjects);
  }
}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let productService: ProductsService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        ProductsService 
        // { provide: ProductsService, useClass: MockProductsService }
      ]
    }).compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductsService);
  });

  it('should retrieve products', fakeAsync(() => {

    // Create a spy on the getProducts method of the ProductService
    const mockProducts = [
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
    ];
    const productServiceSpy = spyOn(productService, 'getProducts').and.returnValue(of(mockProducts));

    // Call the getProducts method of the component 
    component.getProducts();

    // Use tick() to simulate the passage of time until all asynchronous operations are completed
    tick();

    // Now you can assert that the component's products property has been updated
    expect(component.products).toEqual(mockProducts);

    // Verify that the getProducts method of the ProductService was called
    expect(productServiceSpy).toHaveBeenCalled();
  }))


  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'angular-18-test' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-18-test');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('h1')?.textContent).toContain('Hello, angular-18-test');
  // });

  it(`should return app title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    let restult = app.getTittle();
    expect(restult).toEqual('angular-18-test');
  })
});
