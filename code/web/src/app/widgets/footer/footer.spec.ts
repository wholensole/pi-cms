import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { FooterWidget } from './footer'

describe('FooterWidget', () => {
  let component: FooterWidget;
  let fixture: ComponentFixture<FooterWidget>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterWidget ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterWidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
