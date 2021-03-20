import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { AdminSettingsTemplate } from './settings'

describe('AdminSettingsTemplate', () => {
  let component: AdminSettingsTemplate;
  let fixture: ComponentFixture<AdminSettingsTemplate>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSettingsTemplate ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSettingsTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
