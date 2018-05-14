import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from './../../typescripts/free';
import { MDBBootstrapModulePro } from './../../typescripts/pro/index';
// import { MDBSpinningPreloader } from './../../typescripts/pro/index';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2CloudinaryModule } from 'ng2-cloudinary';
import { FileUploadModule } from 'ng2-file-upload';
import { MomentModule } from 'angular2-moment';

import { FormsModule } from '@angular/forms'

import { HeaderComponent } from './../../shared/header/header.component';
import { FooterComponent } from 'app/shared/footer/footer.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    MDBBootstrapModulePro.forRoot(),
    NgbModule.forRoot(),
    Ng2CloudinaryModule,
    FileUploadModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    MomentModule
  ],
  declarations: [HeaderComponent, FooterComponent],
  exports: [
    MDBBootstrapModule,
    MDBBootstrapModulePro,
    NgbModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    Ng2CloudinaryModule,
    FileUploadModule,
    MomentModule,
    HeaderComponent,
    FooterComponent
  ],
  schemas:      [ NO_ERRORS_SCHEMA ]
})
export class SharedModule { }
