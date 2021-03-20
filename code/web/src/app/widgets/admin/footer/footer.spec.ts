import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { AdminFooterWidget } from './footer'

describe('AdminFooterWidget', () => {
  let component: AdminFooterWidget;
  let fixture: ComponentFixture<AdminFooterWidget>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFooterWidget ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFooterWidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
