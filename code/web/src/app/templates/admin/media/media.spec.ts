import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { AdminMediaTemplate } from './media'

describe('AdminMediaTemplate', () => {
  let component: AdminMediaTemplate;
  let fixture: ComponentFixture<AdminMediaTemplate>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMediaTemplate ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMediaTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
