import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSaveFormComponent } from './blog-save-form.component';

describe('BlogSaveFormComponent', () => {
  let component: BlogSaveFormComponent;
  let fixture: ComponentFixture<BlogSaveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogSaveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogSaveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
