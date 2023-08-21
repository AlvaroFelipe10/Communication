import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotObservablesComponent } from './hot-observables.component';

describe('HotObservablesComponent', () => {
  let component: HotObservablesComponent;
  let fixture: ComponentFixture<HotObservablesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotObservablesComponent]
    });
    fixture = TestBed.createComponent(HotObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
