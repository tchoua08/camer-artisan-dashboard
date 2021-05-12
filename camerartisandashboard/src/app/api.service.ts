import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
providedIn: 'root'
})

export class ApiService {

@Output() getLoggedInName: EventEmitter<any> = new EventEmitter();


constructor(private httpClient: HttpClient, public afAuth: AngularFireAuth, public router: Router) {
  this.afAuth.authState.subscribe((user) => {
    if (user) {

      this.setToken(user.displayName);
      this.getLoggedInName.emit(true);
      localStorage.setItem('camerartisanuser', JSON.stringify(user));
    } else {
      localStorage.setItem('camerartisanuser', null);
    }
  });
}





async userlogin(email: string, password: string) {
  return await this.afAuth.signInWithEmailAndPassword(email, password);
}





// token
setToken(token: string) {
localStorage.setItem('token', token);
}
getToken() {
return localStorage.getItem('token');
}
deleteToken() {
localStorage.removeItem('token');
}
isLoggedIn() {
const usertoken = this.getToken();
if (usertoken != null) {
return true;
}
return false;
}
}
