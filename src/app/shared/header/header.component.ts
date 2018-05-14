import { Component, OnInit,
    ViewEncapsulation, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from 'app/typescripts/pro';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  @ViewChild('authModal') authModal;
  public signup;
  public user: String= 'VictorO';
  public password: String= '1p0qamlz';
  constructor(
    private router: Router,
    private toastService: ToastService
  ) { }

  ngOnInit() {
  }


  submitLoginForm(f, signup) {
    console.log(f.value, signup);
if ( f.value.username === this.user && f.value.password === this.password ) {
  this.toastService.success('Welcome to the admin panel');
  setTimeout(this.router.navigate(['/admin']), 4000);
}else{
  this.toastService.error('The Credentials You entered are invalid, Please try again');
}
  }
}
