import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PageEmailCaptureTemplate } from './email-capture'

describe('PageEmailCaptureTemplate', () => {
  let component: PageEmailCaptureTemplate;
  let fixture: ComponentFixture<PageEmailCaptureTemplate>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageEmailCaptureTemplate ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEmailCaptureTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
