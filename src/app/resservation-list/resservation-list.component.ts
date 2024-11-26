import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
@Component({

  selector: 'app-resservation-list',
  templateUrl: './resservation-list.component.html',
  styleUrls: ['./resservation-list.component.css']
})
export class ResservationListComponent implements OnInit {


  reservations:Reservation[] = [];
  constructor(private reservationService:ReservationService){

  }
  ngOnInit(): void {
    this.reservations = this.reservationService.getReservations();    
  }

  deleteReservation(id:string){
    this.reservationService.deleteReservation(id);
  }
}
