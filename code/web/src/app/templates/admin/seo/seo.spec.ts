import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { AdminSeoTemplate } from './seo'

describe('AdminSeoTemplate', () => {
  let component: AdminSeoTemplate;
  let fixture: ComponentFixture<AdminSeoTemplate>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSeoTemplate ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSeoTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
