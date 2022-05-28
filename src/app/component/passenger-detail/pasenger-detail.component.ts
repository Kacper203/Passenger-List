import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges} from "@angular/core";
import { Passenger } from "src/app/passenger-dashboard/model/passenger.interface";


@Component({
    selector: 'passenger-detail',
    styleUrls: ['passenger.detail.component.css'],
    templateUrl: 'passenger.detail.component.html'
})

export class PassengerDetailComponent implements OnChanges{

    @Input() 
    detail!: Passenger;
    @Output()
    edit: EventEmitter<any> = new EventEmitter;
    @Output()
    remove: EventEmitter<any> = new EventEmitter()

    editing: boolean=false;
    constructor(){}

    ngOnChanges(changes : any) {
        if(changes.detail){
            this.detail = Object.assign({}, changes.detail.currentValue)
        }
    }
    onNameChange(value : string){
        this.detail.fullName = value;
    }

    toogleEdit(){
        if(this.editing){
            this.edit.emit(this.detail)
        }
        this.editing = !this.editing
    }

    onRemove(){
        this.remove.emit(this.detail)
    }
}