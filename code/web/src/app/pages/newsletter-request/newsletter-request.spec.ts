import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PageNewsletterRequestTemplate } from './newsletter-request'

describe('PageNewsletterRequestTemplate', () => {
  let component: PageNewsletterRequestTemplate;
  let fixture: ComponentFixture<PageNewsletterRequestTemplate>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNewsletterRequestTemplate ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNewsletterRequestTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
