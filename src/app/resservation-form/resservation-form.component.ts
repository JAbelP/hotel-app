import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resservation-form',
  templateUrl: './resservation-form.component.html',
  styleUrls: ['./resservation-form.component.css'],
})
export class ResservationFormComponent implements OnInit {
  reservationForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private reservationService: ReservationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required],
    });

    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.reservationService.getReservation(id)?.subscribe( reservation =>{
        if (reservation) {
          this.reservationForm.patchValue(reservation);
        }
      });
    }
  }
  onSubmit() {
    if (this.reservationForm.valid) {
      let reservation: Reservation = this.reservationForm.value;
      let id = this.activatedRoute.snapshot.paramMap.get('id');
      if (id) {
        reservation.id = id;
          this.reservationService.updateReservation(id,reservation).subscribe(() => {
            console.log("updated Reservation")
          })

      } else {
        this.reservationService.addReservation(reservation).subscribe(() => {
          console.log("added Reservation")
        });
      }
      this.router.navigate(['/list']);
    }
  }
}
