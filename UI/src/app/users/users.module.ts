import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { ApprovalRequestsComponent } from './approval-requests/approval-requests.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    UserOrdersComponent,
    AllOrdersComponent,
    ApprovalRequestsComponent,
    ProfileComponent,
    ViewUsersComponent
  ],
  imports: [
  SharedModule
  ]
})
export class UsersModule { }
