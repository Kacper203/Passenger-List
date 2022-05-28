import {NgModule} from '@angular/core'
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component'
import { PassengerDetailComponent } from '../component/passenger-detail/pasenger-detail.component'
import { PassengerCountComponent } from '../component/passenger-count/passenger-count.component'
import { PassengerDaschboarService } from './model/passenger-dashboard.servis';



const routes: Routes = [
    {
        path: 'passengers',
        children: [
            { path: '', component: PassengerDashboardComponent },
            { path: ':id', component: PassengerDetailComponent }
        ]
       
    }
]

@NgModule({
    declarations: [
        PassengerDashboardComponent,
        PassengerDetailComponent,
        PassengerCountComponent
    ],
    exports: [
        PassengerDashboardComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule.forChild(routes)
    ],
    providers: [
        PassengerDaschboarService
    ]
})
export class PassengerDashboardModule{}



