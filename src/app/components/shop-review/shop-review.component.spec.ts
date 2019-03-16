import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopReviewComponent } from './shop-review.component';

describe('ShopReviewComponent', () => {
  let component: ShopReviewComponent;
  let fixture: ComponentFixture<ShopReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
