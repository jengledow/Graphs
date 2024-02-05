import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdgeAdderComponent } from './edge-adder.component';

describe('EdgeAdderComponent', () => {
  let component: EdgeAdderComponent;
  let fixture: ComponentFixture<EdgeAdderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdgeAdderComponent]
    });
    fixture = TestBed.createComponent(EdgeAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
