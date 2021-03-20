import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ChatFixedWidget } from './chat-fixed'

describe('ChatFixedWidget', () => {
  let component: ChatFixedWidget;
  let fixture: ComponentFixture<ChatFixedWidget>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatFixedWidget ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatFixedWidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
