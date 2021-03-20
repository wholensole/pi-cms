import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { AdminProductVideoWidget } from './product-video'

describe('AdminProductVideoWidget', () => {
  let component: AdminProductVideoWidget;
  let fixture: ComponentFixture<AdminProductVideoWidget>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProductVideoWidget ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductVideoWidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
