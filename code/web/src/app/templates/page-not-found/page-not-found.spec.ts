import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PageNotFoundTemplate } from './page-not-found'

describe('PageNotFoundTemplate', () => {
  let component: PageNotFoundTemplate;
  let fixture: ComponentFixture<PageNotFoundTemplate>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotFoundTemplate ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
