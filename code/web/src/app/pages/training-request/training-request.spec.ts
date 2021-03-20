import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PageTrainingRequestTemplate } from './training-request'

describe('PageTrainingRequestTemplate', () => {
  let component: PageTrainingRequestTemplate;
  let fixture: ComponentFixture<PageTrainingRequestTemplate>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTrainingRequestTemplate ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTrainingRequestTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
