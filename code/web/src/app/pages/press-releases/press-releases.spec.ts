import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PagePressReleasesTemplate } from './press-releases'

describe('PagePressReleasesTemplate', () => {
  let component: PagePressReleasesTemplate;
  let fixture: ComponentFixture<PagePressReleasesTemplate>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePressReleasesTemplate ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePressReleasesTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
