import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { AdminPageNotFoundTemplate } from './page-not-found'

describe('AdminPageNotFoundTemplate', () => {
  let component: AdminPageNotFoundTemplate;
  let fixture: ComponentFixture<AdminPageNotFoundTemplate>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPageNotFoundTemplate ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPageNotFoundTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
