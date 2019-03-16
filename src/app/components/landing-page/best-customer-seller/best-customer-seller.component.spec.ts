import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestCustomerSellerComponent } from './best-customer-seller.component';

describe('BestCustomerSellerComponent', () => {
  let component: BestCustomerSellerComponent;
  let fixture: ComponentFixture<BestCustomerSellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestCustomerSellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestCustomerSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
