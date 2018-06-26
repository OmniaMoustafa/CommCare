import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { HospitalHeaderComponent } from './hospital-header/hospital-header.component';
/* import { HospitalComponent } from './hospital/hospital.component'; */
import { HospitalFooterComponent } from 'src/app/shared/hospital-footer/hospital-footer.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { DepartmentsModule } from '../departments/departments.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DoctorsModule } from '../doctors/doctors.module';
import { HospitalLoginComponent } from './hospital-login/hospital-login.component';
import { HospitalAboutUsComponent } from './hospital-About-Us/hospital-About-Us.component';
import { HospitalMedicalservicesComponent } from './hospital-medicalservices/hospital-medicalservices.component';
import { HeaderComponent } from './header-content/header.component';
import { SystemFooterComponent } from './system-footer/system-footer.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SystemMenuComponent } from './system-menu/system-menu.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SystemMasterComponent } from './system-master/system-master.component';
import { HospitalMasterComponent } from './hospital-master/hospital-master.component';
import { NewHeaderComponent  } from './new-header/new-header.component'


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DepartmentsModule,
    DoctorsModule,
    RouterModule.forChild([
      {path: 'contactUs', component: ContactUsComponent},
      {path: 'login', component: HospitalLoginComponent},
      {path: 'Signup', component: SignUpComponent},
      {path: 'AboutUs', component: HospitalAboutUsComponent},
      {path: 'Medicalservice', component: HospitalMedicalservicesComponent},
      {path: 'aboutus',component:AboutUsComponent}
      
    ])
  ],
  declarations: [
    MenuComponent,
    HospitalHeaderComponent,
    HospitalFooterComponent,
    ContactUsComponent   ,
    HospitalLoginComponent,
    HospitalAboutUsComponent,
    HospitalMedicalservicesComponent,
    HeaderComponent,
    SystemFooterComponent,
    SignUpComponent,
    SystemMenuComponent,
    AboutUsComponent,
    SystemMasterComponent,
    HospitalMasterComponent,
    NewHeaderComponent
],
exports:
[
  HospitalHeaderComponent,
  HospitalFooterComponent,
  AboutUsComponent,
  SystemFooterComponent,
  HeaderComponent,
  SystemMasterComponent,
  HospitalMasterComponent,
  NewHeaderComponent
]
})
export class SharedModule { }
