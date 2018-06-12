import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignTaskComponent } from './assign-Task.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskItemSmallComponent } from './task-item-small/task-item-small.component';
import { TaskListingComponent } from './task-listing/task-listing.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AssignTaskComponent,
    TaskAddComponent,
    TaskDetailsComponent,
    TaskItemSmallComponent,
    TaskListingComponent
],
exports:[
  AssignTaskComponent
]
})
export class AssignTaskModule { }
