import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogUpdateFormComponent } from './blog-update-form.component';

describe('BlogUpdateFormComponent', () => {
  let component: BlogUpdateFormComponent;
  let fixture: ComponentFixture<BlogUpdateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogUpdateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
