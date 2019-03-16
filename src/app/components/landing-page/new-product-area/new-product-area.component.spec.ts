import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductAreaComponent } from './new-product-area.component';

describe('NewProductAreaComponent', () => {
  let component: NewProductAreaComponent;
  let fixture: ComponentFixture<NewProductAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProductAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProductAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
