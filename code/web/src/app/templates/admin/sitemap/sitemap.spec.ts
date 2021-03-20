import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { AdminPostTemplate } from './post'

describe('AdminPostTemplate', () => {
  let component: AdminPostTemplate;
  let fixture: ComponentFixture<AdminPostTemplate>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPostTemplate ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPostTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
