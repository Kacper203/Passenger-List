import { Component ,OnInit } from "@angular/core";
import { Passenger } from "../../model/passenger.interface";
import { PassengerDaschboarService } from "../../model/passenger-dashboard.servis";
@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.css'],
    templateUrl: 'passenger-dashboard.component.html'
})

// export class PassengerDashboardComponent implements OnInit{

//   passengers!: Passenger[];

//   constructor(private passengerService : PassengerDaschboarService){}
    
//   ngOnInit() {
//     this.passengers = this.passengerService.getPassengers()
//   }

//   handleRemove(event : Passenger) {
//     this.passengers = this.passengers.filter((passenger: Passenger) => {
//       return passenger.id !==event.id
//     })
//   }

//   handleEdit(event :Passenger){
//     this.passengers = this.passengers.map((passenger: Passenger) => {
//         if (passenger.id === event.id) {
//           passenger = Object.assign({}, passenger, event)
//         }
//           return passenger
//     })
//     console.log(this.passengers)
//     console.log(event)
//   }
// }

export class PassengerDashboardComponent implements OnInit {
    passengers: Passenger[] = [];
    constructor(private passengerService: PassengerDaschboarService) {}

    ngOnInit() {
      this.passengerService.getPassengers().subscribe(res => {
        console.log('res', res);
        this.passengers = res;
      })
    }

    handleEdit(event: Passenger) {
      this.passengerService.uptadePassenger(event).subscribe((data: Passenger[]) =>{
        this.passengers = this.passengers.map((passenger: Passenger) => {
          if (passenger.id === event.id) {
            passenger = Object.assign({}, passenger, event);
          }
          return passenger;
      })
    //   this.passengers = this.passengers.map((passenger: Passenger) => {
    //     if (passenger.id === event.id) {
    //       passenger = Object.assign({}, passenger, event);
    //     }
    //     return passenger;
    //   });
    // }
      })}
    handleRemove(event: Passenger) {
      this.passengers = this.passengers.filter((passenger: Passenger) => {
        return passenger.id !== event.id;
      });
    }
  }