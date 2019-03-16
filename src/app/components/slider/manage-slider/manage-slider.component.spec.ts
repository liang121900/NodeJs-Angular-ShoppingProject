import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSliderComponent } from './manage-slider.component';

describe('ManageSliderComponent', () => {
  let component: ManageSliderComponent;
  let fixture: ComponentFixture<ManageSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
