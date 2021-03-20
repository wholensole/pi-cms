import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PageContactTemplate } from './contact-form'

describe('PageContactTemplate', () => {
  let component: PageContactTemplate;
  let fixture: ComponentFixture<PageContactTemplate>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageContactTemplate ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageContactTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
