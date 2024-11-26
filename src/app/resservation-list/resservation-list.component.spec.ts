import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResservationListComponent } from './resservation-list.component';

describe('ResservationListComponent', () => {
  let component: ResservationListComponent;
  let fixture: ComponentFixture<ResservationListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResservationListComponent]
    });
    fixture = TestBed.createComponent(ResservationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
