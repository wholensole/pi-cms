import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { AdminHeaderWidget } from './header'

describe('AdminHeaderWidget', () => {
  let component: AdminHeaderWidget;
  let fixture: ComponentFixture<AdminHeaderWidget>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHeaderWidget ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHeaderWidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
