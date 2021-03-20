import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { AdminMediaWidget } from './media'

describe('AdminMediaWidget', () => {
  let component: AdminMediaWidget;
  let fixture: ComponentFixture<AdminMediaWidget>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMediaWidget ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMediaWidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
