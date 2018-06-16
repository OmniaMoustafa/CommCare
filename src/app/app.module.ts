import { BrowserModule } from '@angular/platform-browser';
import { NgModule , OnInit } from '@angular/core';
import { AppComponent } from './app.component';
import { EventsModule } from './events/events.module';
import { FooterComponent } from './shared/footer-content/footer.component';
import { HeaderComponent } from './shared/header-content/header.component';
import { DepartmentService } from 'src/app/shared/services/department.service';
import { DepartmentsModule} from 'src/app/departments/departments.module';
import { DoctorsModule } from './doctors/doctors.module';
import { DepartmentsComponent } from 'src/app/departments/departments.component';
import { HospitalHeaderComponent } from 'src/app/shared/hospital-header/hospital-header.component';
import { HospitalFooterComponent } from 'src/app/shared/hospital-footer/hospital-footer.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { Doctorservice } from './shared/services/doctor.service';
import { HospitalHomeComponent } from './hospital-home/hospital-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HospitalHomeModule } from './hospital-home/hospital-home.module';
import { DoctorCategoryModule } from './doctorCategory/doctorCategory.module';
import { CalendarService } from './shared/services/CalendarService/calendar.service';
import { RouterModule } from '@angular/router';
import { PatientsModule } from './patients/patients.module';
import { MedicalHistoryModule } from './medical-history/medical-history.module';
import { PatientService } from './shared/services/patient.service';
import { HPService } from './shared/services/MedicalHistoryService/hp.service';
import { InitialPhysicianAssesmentService } from './shared/services/MedicalHistoryService/InitialPhysicianAssesment.service';
import { AdmissionService } from './shared/services/MedicalHistoryService/admission.service';
import { ConsultationService } from './shared/services/MedicalHistoryService/consultation.service';
import { PhysicianService } from './shared/services/MedicalHistoryService/physician.service';
import { SystemHomeModule } from './system-home/system-home.module';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EventsModule,
    DepartmentsModule,
    DoctorsModule,
    SharedModule,
    HospitalHomeModule,
    DoctorCategoryModule,
    PatientsModule,
    SystemHomeModule,
    MedicalHistoryModule
   ],

  providers: [
    DepartmentService,
    Doctorservice,
    CalendarService,
    PatientService,
    HPService,
    InitialPhysicianAssesmentService,
    AdmissionService,
    ConsultationService,
    PhysicianService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
