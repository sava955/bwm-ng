import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { RentalComponent } from './rental/rental.component';
import { TempComponent } from './temp/temp.component';

import { RentalModule } from './rental/rental.module';
import { AuthModule } from './auth/auth.module';

const routes: Routes = [
  {path: '', redirectTo: '/rentals', pathMatch: 'full'},
  {path: 'temp', component: TempComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TempComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    RentalModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
