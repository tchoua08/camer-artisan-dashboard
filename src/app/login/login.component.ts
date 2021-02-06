import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
angForm: FormGroup;
constructor(private SpinnerService: NgxSpinnerService, private toastr: ToastrService, private fb: FormBuilder, private dataService: ApiService, private router: Router) {
this.angForm = this.fb.group({
email: ['', [Validators.required, Validators.minLength(1), Validators.email]],
password: ['', Validators.required]
});
}

ngOnInit() {
}
postdata(angForm1) {
  this.SpinnerService.show();
  this.dataService.userlogin(angForm1.value.email, angForm1.value.password)
.then(
data => {
   if (angForm1.value.email === 'tchoua86@gmail.com') {
    this.SpinnerService.hide();
    const redirect = '/dashboard';
    this.router.navigate([redirect]);
   } else {
    this.SpinnerService.hide();
    this.toastr.error('Oups!', 'Merci de contacter votre administrateur');
   }

},
error => {
  this.SpinnerService.hide();
  this.toastr.error('Oups!', 'Adresse mail ou mot de passe incorrect');

});
}
get email() { return this.angForm.get('email'); }
get password() { return this.angForm.get('password'); }
}
