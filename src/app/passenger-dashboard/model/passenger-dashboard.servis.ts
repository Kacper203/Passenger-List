import { Passenger, PassangerResponse } from "./passenger.interface"
import { Injectable } from "@angular/core"
import { HttpClient, } from '@angular/common/http'
import { map, Observable, tap } from "rxjs";

const PASENGER_API: string = '/assets/db.json' 
@Injectable()
export class PassengerDaschboarService{
 
  constructor(private http: HttpClient){}

  getPassengers(): Observable<Passenger[]> {
    return this.http.get<PassangerResponse>(PASENGER_API)
      .pipe(
        map((response: PassangerResponse) => {
          return response.passengers;
        })
      )
  }
 uptadePassenger(passenger: Passenger): Observable<Passenger[]> {
    return this.http.get<PassangerResponse>(`${PASENGER_API}/${passenger.id}`)
      .pipe(
        map((response: PassangerResponse) => {
          return response.passengers;
        })
      )
  }
}