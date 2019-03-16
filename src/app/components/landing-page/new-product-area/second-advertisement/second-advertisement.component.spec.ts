import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondAdvertisementComponent } from './second-advertisement.component';

describe('SecondAdvertisementComponent', () => {
  let component: SecondAdvertisementComponent;
  let fixture: ComponentFixture<SecondAdvertisementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondAdvertisementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondAdvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
