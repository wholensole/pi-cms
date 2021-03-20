import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PageRmaFormTemplate } from './rma-form'

describe('PageRmaFormTemplate', () => {
  let component: PageRmaFormTemplate;
  let fixture: ComponentFixture<PageRmaFormTemplate>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageRmaFormTemplate ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRmaFormTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
