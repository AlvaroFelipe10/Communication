import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckChildComponent } from './check-child.component';

describe('CheckChildComponent', () => {
  let component: CheckChildComponent;
  let fixture: ComponentFixture<CheckChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckChildComponent]
    });
    fixture = TestBed.createComponent(CheckChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
