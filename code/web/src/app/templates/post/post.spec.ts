import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PostTemplate } from './post'

describe('PostTemplate', () => {
  let component: PostTemplate;
  let fixture: ComponentFixture<PostTemplate>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostTemplate ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
