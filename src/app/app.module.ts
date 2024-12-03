import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { EmployeeComponent } from './employee/employee.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HttpClientModule } from '@angular/common/http';
import { AccountsComponent } from './accounts/accounts.component';
import { AmazonComponent } from './amazon/amazon.component';
import { MailComponent } from './mail/mail.component';
import { BookComponent } from './book/book.component';
import { WeatherComponent } from './weather/weather.component';
import { BlogComponent } from './blog/blog.component';
import { ImdbComponent } from './imdb/imdb.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { StudentComponent } from './student/student.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { ProfileComponent } from './profile/profile.component';
import { MaterialComponent } from './material/material.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { CreateUserComponent } from './create-user/create-user.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { EditVehicleComponent } from './edit-vehicle/edit-vehicle.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { EditAccountComponent } from './edit-account/edit-account.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    WelcomeComponent,
    DataBindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BmiComponent,
    PageNotFoundComponent,
    DirectivesComponent,
    RegistrationComponent,
    EventRegistrationComponent,
    EmployeeRegistrationComponent,
    EmployeeComponent,
    FlipkartComponent,
    VehicleComponent,
    AccountsComponent,
    AmazonComponent,
    MailComponent,
    BookComponent,
    WeatherComponent,
    BlogComponent,
    ImdbComponent,
    PokemonComponent,
    CreateVehicleComponent,
    CreateAccountComponent,
    StudentComponent,
    CreateStudentComponent,
    ProfileComponent,
    MaterialComponent,
    CreateUserComponent,
    StudentDetailsComponent,
    VehicleDetailsComponent,
    EditVehicleComponent,
    AccountDetailsComponent,
    EditAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
