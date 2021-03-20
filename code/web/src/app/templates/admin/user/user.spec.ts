import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { AdminUserTemplate } from './user'

describe('AdminUserTemplate', () => {
  let component: AdminUserTemplate;
  let fixture: ComponentFixture<AdminUserTemplate>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserTemplate ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
