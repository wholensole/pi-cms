import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { AdminRobotsTemplate } from './robots'

describe('AdminRobotsTemplate', () => {
  let component: AdminRobotsTemplate;
  let fixture: ComponentFixture<AdminRobotsTemplate>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRobotsTemplate ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRobotsTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
