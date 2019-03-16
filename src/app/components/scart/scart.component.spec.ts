import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScartComponent } from './scart.component';

describe('ScartComponent', () => {
  let component: ScartComponent;
  let fixture: ComponentFixture<ScartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
