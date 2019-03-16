import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsCellComponent } from './product-details-cell.component';

describe('ProductDetailsCellComponent', () => {
  let component: ProductDetailsCellComponent;
  let fixture: ComponentFixture<ProductDetailsCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailsCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
