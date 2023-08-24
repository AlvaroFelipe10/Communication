import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchMergeComponent } from './switch-merge.component';

describe('SwitchMergeComponent', () => {
  let component: SwitchMergeComponent;
  let fixture: ComponentFixture<SwitchMergeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwitchMergeComponent]
    });
    fixture = TestBed.createComponent(SwitchMergeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
