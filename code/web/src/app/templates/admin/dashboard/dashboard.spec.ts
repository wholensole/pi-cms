import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { AdminDashboardTemplate } from './dashboard'

describe('AdminDashboardTemplate', () => {
  let component: AdminDashboardTemplate;
  let fixture: ComponentFixture<AdminDashboardTemplate>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDashboardTemplate ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
