import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { AdminUsersTemplate } from './users'

describe('AdminUsersTemplate', () => {
  let component: AdminUsersTemplate;
  let fixture: ComponentFixture<AdminUsersTemplate>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUsersTemplate ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsersTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
