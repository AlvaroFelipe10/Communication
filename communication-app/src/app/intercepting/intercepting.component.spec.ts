import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterceptingComponent } from './intercepting.component';

describe('InterceptingComponent', () => {
  let component: InterceptingComponent;
  let fixture: ComponentFixture<InterceptingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterceptingComponent]
    });
    fixture = TestBed.createComponent(InterceptingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
