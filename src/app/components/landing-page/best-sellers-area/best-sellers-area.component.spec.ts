import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSellersAreaComponent } from './best-sellers-area.component';

describe('BestSellersAreaComponent', () => {
  let component: BestSellersAreaComponent;
  let fixture: ComponentFixture<BestSellersAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestSellersAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestSellersAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
