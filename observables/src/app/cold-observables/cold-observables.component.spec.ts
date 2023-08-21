import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdObservablesComponent } from './cold-observables.component';

describe('ColdObservablesComponent', () => {
  let component: ColdObservablesComponent;
  let fixture: ComponentFixture<ColdObservablesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColdObservablesComponent]
    });
    fixture = TestBed.createComponent(ColdObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
