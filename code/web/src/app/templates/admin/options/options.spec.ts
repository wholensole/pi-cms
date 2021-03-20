import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { AdminOptionsTemplate } from './options'

describe('AdminOptionsTemplate', () => {
  let component: AdminOptionsTemplate;
  let fixture: ComponentFixture<AdminOptionsTemplate>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOptionsTemplate ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOptionsTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
