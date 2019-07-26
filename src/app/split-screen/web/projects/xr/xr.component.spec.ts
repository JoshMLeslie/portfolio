import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XrComponent } from './xr.component';

describe('XrComponent', () => {
  let component: XrComponent;
  let fixture: ComponentFixture<XrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
