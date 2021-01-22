import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compare2Component } from './compare2.component';

describe('Compare2Component', () => {
  let component: Compare2Component;
  let fixture: ComponentFixture<Compare2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Compare2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Compare2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
