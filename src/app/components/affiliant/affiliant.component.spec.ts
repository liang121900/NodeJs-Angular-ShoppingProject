import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliantComponent } from './affiliant.component';

describe('AffiliantComponent', () => {
  let component: AffiliantComponent;
  let fixture: ComponentFixture<AffiliantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffiliantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiliantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
