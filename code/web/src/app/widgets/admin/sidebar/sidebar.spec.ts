import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { AdminSidebarWidget } from './sidebar'

describe('AdminSidebarWidget', () => {
  let component: AdminSidebarWidget;
  let fixture: ComponentFixture<AdminSidebarWidget>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSidebarWidget ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSidebarWidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
