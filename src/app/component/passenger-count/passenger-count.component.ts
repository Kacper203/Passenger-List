import { Component, Input} from "@angular/core";
import { Passenger
 } from "src/app/passenger-dashboard/model/passenger.interface";


@Component({
    selector: 'passenger-count',
    templateUrl: 'passenger-count.component.html'
})

export class PassengerCountComponent{
    @Input()
    items!: Passenger[];
    checkedInCount(){
        if(!this.items) return;
        return this.items.filter((pasenger : Passenger) =>{
            return pasenger.checkedIn;
        }).length
    }}