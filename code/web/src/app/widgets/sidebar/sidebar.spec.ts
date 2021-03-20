import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { SidebarWidget } from './sidebar'

describe('SidebarWidget', () => {
  let component: SidebarWidget;
  let fixture: ComponentFixture<SidebarWidget>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarWidget ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarWidget);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
