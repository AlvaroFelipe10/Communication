import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCreationComponent } from './basic-creation.component';

describe('BasicCreationComponent', () => {
  let component: BasicCreationComponent;
  let fixture: ComponentFixture<BasicCreationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicCreationComponent]
    });
    fixture = TestBed.createComponent(BasicCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
