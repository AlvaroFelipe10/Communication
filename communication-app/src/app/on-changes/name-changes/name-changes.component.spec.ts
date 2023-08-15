import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameChangesComponent } from './name-changes.component';

describe('NameChangesComponent', () => {
  let component: NameChangesComponent;
  let fixture: ComponentFixture<NameChangesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NameChangesComponent]
    });
    fixture = TestBed.createComponent(NameChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
