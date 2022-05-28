// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule, Routes } from '@angular/router';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';

// import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';

// import { PassengerDaschboarService } from './passenger-dashboard/model/passenger-dashboard.servis';
// // import { HomeComponent } from './home.component';
// // import { NotFoundComponent } from './not-found.component'
// // const routes: Routes = [
// //   {path: '', component: HomeComponent, pathMatch: 'full'},
// //   {path: '**', component: NotFoundComponent}
// // ] 


// @NgModule({
//   declarations: [
//     AppComponent,
//     // HomeComponent,
//     // NotFoundComponent
    
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     PassengerDashboardModule,
//     // RouterModule.forRoot(routes)
  
//   ],
//   providers: [
// PassengerDaschboarService
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    PassengerDashboardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}