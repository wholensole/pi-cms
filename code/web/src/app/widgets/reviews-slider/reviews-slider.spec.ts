import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ReviewsSliderWidget } from './reviews-slider'

describe('ReviewsSliderWidget', () => {
  let component: ReviewsSliderWidget;
  let fixture: ComponentFixture<ReviewsSliderWidget>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewsSliderWidget ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsSliderWidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
