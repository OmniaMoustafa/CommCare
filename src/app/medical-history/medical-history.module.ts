import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicalHistoryComponent } from './medical-history.component';
import { AccordionModule } from 'ngx-bootstrap';
import { InitialPhysicianAssesmentComponent } from './initial-physician-assesment/initial-physician-assesment.component';
// tslint:disable-next-line:max-line-length
import { InitialPhysicianAssesmentListingComponent } from './Initial-physician-assesment/initial-physician-assesment-listing/initial-physician-assesment-listing.component';
// tslint:disable-next-line:max-line-length
import { InitialPhysicianAssesmentItemSmallComponent } from './Initial-physician-assesment/initial-physician-assesment-item-small/initial-physician-assesment-item-small.component';
// tslint:disable-next-line:max-line-length
import { InitialPhysicianAssesmentDetailsComponent } from './Initial-physician-assesment/initial-physician-assesment-details/initial-physician-assesment-details.component';
// tslint:disable-next-line:max-line-length
import { InitialPhysicianAssesmentAddComponent } from './Initial-physician-assesment/initial-physician-assesment-add/initial-physician-assesment-add.component';
import { InitialPhysicianAssesmentService } from '../shared/services/MedicalHistoryService/InitialPhysicianAssesment.service';
import { AdmissionComponent } from './admission/admission.component';
import { AdmissionListingComponent } from './admission/admission-listing/admission-listing.component';
import { AdmissionItemSmallComponent } from './admission/admission-item-small/admission-item-small.component';
import { AdmissionItemDetailsComponent } from './admission/admission-item-details/admission-item-details.component';
import { AdmissionItemAddComponent } from './admission/admission-item-add/admission-item-add.component';
import { HPPhysicianProgressComponent } from './hp-physician-progress/hp-physician-progress.component';
// tslint:disable-next-line:max-line-length
import { HpPhysicianProgressListingComponent } from './hp-physician-progress/hp-physician-progress-listing/hp-physician-progress-listing.component';
// tslint:disable-next-line:max-line-length
import { HpPhysicianProgressItemSmallComponent } from './hp-physician-progress/hp-physician-progress-item-small/hp-physician-progress-item-small.component';
// tslint:disable-next-line:max-line-length
import { HpPhysicianProgressDetailsComponent } from './hp-physician-progress/hp-physician-progress-details/hp-physician-progress-details.component';
import { HpPhysicianProgressAddComponent } from './hp-physician-progress/hp-physician-progress-add/hp-physician-progress-add.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { ConsultationListingComponent } from './consultation/consultation-listing/consultation-listing.component';
import { ConsultationItemSmallComponent } from './consultation/consultation-item-small/consultation-item-small.component';
import { ConsultationDetailsComponent } from './consultation/consultation-details/consultation-details.component';
import { ConsultationAddComponent } from './consultation/consultation-add/consultation-add.component';
import { PhysicianSheetComponent } from './physician-sheet/physician-sheet.component';
import { PhysicianSheetListingComponent } from './physician-sheet/physician-sheet-listing/physician-sheet-listing.component';
import { PhysicianSheetItemSmallComponent } from './physician-sheet/physician-sheet-item-small/physician-sheet-item-small.component';
import { PhysicianSheetDetailsComponent } from './physician-sheet/physician-sheet-details/physician-sheet-details.component';
import { PhysicianSheetAddComponent } from './physician-sheet/physician-sheet-add/physician-sheet-add.component';
import { HPService } from '../shared/services/MedicalHistoryService/hp.service';
import { ConsultationService } from '../shared/services/MedicalHistoryService/consultation.service';
import { AdmissionService } from '../shared/services/MedicalHistoryService/admission.service';
import { PhysicianService } from '../shared/services/MedicalHistoryService/physician.service';

@NgModule({
  imports: [
    CommonModule,
    AccordionModule.forRoot()
  ],
  declarations: [
    MedicalHistoryComponent,
    InitialPhysicianAssesmentComponent,
    InitialPhysicianAssesmentListingComponent,
    InitialPhysicianAssesmentItemSmallComponent,
    InitialPhysicianAssesmentDetailsComponent,
    InitialPhysicianAssesmentAddComponent,
    AdmissionComponent,
    AdmissionListingComponent,
    AdmissionItemSmallComponent,
    AdmissionItemDetailsComponent,
    AdmissionItemAddComponent,
    HPPhysicianProgressComponent,
    HpPhysicianProgressListingComponent,
    HpPhysicianProgressItemSmallComponent,
    HpPhysicianProgressDetailsComponent,
    HpPhysicianProgressAddComponent,
    ConsultationComponent,
    ConsultationListingComponent,
    ConsultationItemSmallComponent,
    ConsultationDetailsComponent,
    ConsultationAddComponent,
    PhysicianSheetComponent,
    PhysicianSheetListingComponent,
    PhysicianSheetItemSmallComponent,
    PhysicianSheetDetailsComponent,
    PhysicianSheetAddComponent],
    exports: [
    MedicalHistoryComponent,
    ],
    providers: [
      InitialPhysicianAssesmentService,
      HPService,
      ConsultationService,
      AdmissionService,
      PhysicianService
    ]
})
export class MedicalHistoryModule { }
