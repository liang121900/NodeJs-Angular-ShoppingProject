import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellersProductsComponent } from './sellers-products.component';

describe('SellersProductsComponent', () => {
  let component: SellersProductsComponent;
  let fixture: ComponentFixture<SellersProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellersProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellersProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
