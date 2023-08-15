import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemClientComponent } from './item-client.component';

describe('ItemClientComponent', () => {
  let component: ItemClientComponent;
  let fixture: ComponentFixture<ItemClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemClientComponent]
    });
    fixture = TestBed.createComponent(ItemClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
