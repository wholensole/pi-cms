import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PageBlogTemplate } from './blog'

describe('PageBlogTemplate', () => {
  let component: PageBlogTemplate;
  let fixture: ComponentFixture<PageBlogTemplate>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBlogTemplate ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBlogTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
