import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PageAskAnExpertTemplate } from './ask-an-expert'

describe('PageAskAnExpertTemplate', () => {
  let component: PageAskAnExpertTemplate;
  let fixture: ComponentFixture<PageAskAnExpertTemplate>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAskAnExpertTemplate ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAskAnExpertTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
