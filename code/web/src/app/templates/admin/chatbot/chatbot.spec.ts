import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { AdminChatbotTemplate } from './chatbot'

describe('AdminChatbotTemplate', () => {
  let component: AdminChatbotTemplate;
  let fixture: ComponentFixture<AdminChatbotTemplate>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminChatbotTemplate ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminChatbotTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
