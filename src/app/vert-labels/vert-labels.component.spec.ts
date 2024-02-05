import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VertLabelsComponent } from './vert-labels.component';

describe('VertLabelsComponent', () => {
  let component: VertLabelsComponent;
  let fixture: ComponentFixture<VertLabelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VertLabelsComponent]
    });
    fixture = TestBed.createComponent(VertLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
