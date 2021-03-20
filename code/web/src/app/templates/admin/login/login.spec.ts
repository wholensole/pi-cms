import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { LoginTemplate } from './login'

describe('LoginTemplate', () => {
  let component: LoginTemplate;
  let fixture: ComponentFixture<LoginTemplate>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginTemplate ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
