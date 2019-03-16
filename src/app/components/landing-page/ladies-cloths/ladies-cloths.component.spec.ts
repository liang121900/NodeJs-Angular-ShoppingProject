import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LadiesClothsComponent } from './ladies-cloths.component';

describe('LadiesClothsComponent', () => {
  let component: LadiesClothsComponent;
  let fixture: ComponentFixture<LadiesClothsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LadiesClothsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LadiesClothsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
