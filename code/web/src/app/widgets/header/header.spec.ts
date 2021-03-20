import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { HeaderWidget } from './header'

describe('HeaderWidget', () => {
  let component: HeaderWidget;
  let fixture: ComponentFixture<HeaderWidget>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderWidget ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderWidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
