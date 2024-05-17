import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { PageSideNavComponent } from './components/page-side-nav/page-side-nav.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    PageHeaderComponent, PageFooterComponent, PageSideNavComponent, PageNotFoundComponent,PageNotFoundComponent
  ],
  imports: [
    CommonModule, MaterialModule, ReactiveFormsModule, HttpClientModule,RouterModule
  ],
  exports:[CommonModule, MaterialModule, PageHeaderComponent, PageFooterComponent, PageSideNavComponent, PageNotFoundComponent,  ReactiveFormsModule,]
})
export class SharedModule { }
