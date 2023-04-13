import { Component, OnInit } from '@angular/core';
import {BaseServiceService} from "../../services/base-service.service";
import {Booking} from "../../models/booking";

@Component({
  selector: 'app-mybooking',
  templateUrl: './mybooking.component.html',
  styleUrls: ['./mybooking.component.css']
})
export class MybookingComponent implements OnInit {

  //@ts-ignore
  booking: Booking;
  departure: string = '';
  arrive: string = '';
  flight: string = '';
  passenger: string = '';
  flightType: string = '';
  boardingTime: string = '';
  departureTime: string = '';
  duration: string = '';
  isBoardingPassShown: boolean = false;
  toggleButtonText: string = 'Show Boarding Pass';


  constructor(private baseService: BaseServiceService) { }

  ngOnInit(): void {
    this.getMyBooking();
  }
  getMyBooking(){
    this.baseService.getBooking().subscribe({
      next: data => {
        console.log(data);
        this.booking = data.data.getBooking;
        console.log(this.booking);
        this.getBasicInformation(this.booking);
      },
      error: err => {
        console.log(err);
      }
    })
  }
  getBasicInformation(baseInfo: Booking) {
    const info: Booking = baseInfo;
    const length = info.itinerary.connections.length;
    const firstConnection = info.itinerary.connections[0];
    const lastConnection = info.itinerary.connections[length - 1];

    this.departure = info.itinerary.connections[0].origin.IATACode;
    this.arrive = lastConnection.destination.IATACode;
    this.flight = lastConnection.segments[0].marketingFlight.carrier.name + ' ' +
      lastConnection.segments[0].marketingFlight.number;
    this.passenger = info.passengers.firstName + ' ' + info.passengers.lastName;
    this.flightType = firstConnection.segments[0].marketingFlight.operatingFlight.equipment.name;
    this.boardingTime = firstConnection.segments[0].marketingFlight.operatingFlight.localCheckInStart;
    this.departureTime = firstConnection.segments[0].marketingFlight.operatingFlight.localScheduledDeparture;
    this.calculateDuration(info);
  }

  calculateDuration(data: Booking){
    const connections = data.itinerary.connections;
    let duration: number = 0;
    connections.forEach((connetion) => {
      duration += parseInt(connetion.duration, 10);
    })
    this.duration = this.transformMinute(duration);
  }
  transformMinute(value: number): string {
    let hours = Math.floor(value / 60);
    let minutes = Math.floor(value % 60);
    let formattedMin;
    if(minutes < 10){
      formattedMin = `0${minutes}`;
    } else {
      formattedMin = minutes;
    }
    return hours + ':' + formattedMin;
  }
  toggleBoardingPass() {
    this.isBoardingPassShown = !this.isBoardingPassShown;
    if (this.isBoardingPassShown) {
      this.toggleButtonText = 'Show Booking Card';
    } else {
      this.toggleButtonText = 'Show Boarding Pass';
    }
  }

}
