
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared-module/shared.module';
import { NewsModule } from 'app/admin/news/news.module';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { MusicModule } from 'app/admin/music/music.module';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NewsModule,
    MusicModule,
    AdminRoutingModule
  ],
  declarations: [DashboardComponent, AdminComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AdminModule { }

