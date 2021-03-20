import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PageCaseStudiesTemplate } from './case-studies'

describe('PageCaseStudiesTemplate', () => {
  let component: PageCaseStudiesTemplate;
  let fixture: ComponentFixture<PageCaseStudiesTemplate>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCaseStudiesTemplate ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCaseStudiesTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
