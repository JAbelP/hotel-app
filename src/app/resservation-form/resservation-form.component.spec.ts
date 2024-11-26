import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResservationFormComponent } from './resservation-form.component';

describe('ResservationFormComponent', () => {
  let component: ResservationFormComponent;
  let fixture: ComponentFixture<ResservationFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResservationFormComponent]
    });
    fixture = TestBed.createComponent(ResservationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
