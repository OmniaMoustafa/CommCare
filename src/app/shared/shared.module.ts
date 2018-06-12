import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HospitalHeaderComponent } from './hospital-header/hospital-header.component';
/* import { HospitalComponent } from './hospital/hospital.component'; */
import { HospitalFooterComponent } from 'src/app/shared/hospital-footer/hospital-footer.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { DepartmentsModule } from '../departments/departments.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DoctorsModule } from '../doctors/doctors.module';
import { HospitalLoginComponent } from './hospital-login/hospital-login.component';

@NgModule({
  imports: [
    CommonModule,
    DepartmentsModule,
    DoctorsModule,
    RouterModule.forChild([
      {path:'contactUs', component: ContactUsComponent},
      {path:'login', component: HospitalLoginComponent}
    ])
  ],
  declarations: [
    MenuComponent,
    HospitalHeaderComponent, 
    HospitalFooterComponent,
    ContactUsComponent   ,
    HospitalLoginComponent 
],
exports:
[
  HospitalHeaderComponent, 
  HospitalFooterComponent,
]
})
export class SharedModule { }
