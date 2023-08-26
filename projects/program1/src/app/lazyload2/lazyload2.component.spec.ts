import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lazyload2Component } from './lazyload2.component';

describe('Lazyload2Component', () => {
  let component: Lazyload2Component;
  let fixture: ComponentFixture<Lazyload2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Lazyload2Component]
    });
    fixture = TestBed.createComponent(Lazyload2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
