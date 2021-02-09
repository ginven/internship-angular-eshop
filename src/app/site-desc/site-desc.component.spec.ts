import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteDescComponent } from './site-desc.component';

describe('SiteDescComponent', () => {
  let component: SiteDescComponent;
  let fixture: ComponentFixture<SiteDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteDescComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
