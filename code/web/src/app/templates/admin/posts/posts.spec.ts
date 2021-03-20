import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { AdminPostsTemplate } from './posts'

describe('AdminPostsTemplate', () => {
  let component: AdminPostsTemplate;
  let fixture: ComponentFixture<AdminPostsTemplate>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPostsTemplate ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPostsTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
