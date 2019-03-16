import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersaddComponent } from './offersadd.component';

describe('OffersaddComponent', () => {
  let component: OffersaddComponent;
  let fixture: ComponentFixture<OffersaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffersaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
