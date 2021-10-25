import { Component, VERSION } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn:boolean= false;// Checks with the user connected
  constructor(private r: Router,private auth:AngularFireAuth) {
// Guard
this.auth.onAuthStateChanged( userDetails =>this.isLoggedIn = !!userDetails)
}
//Guard
  logout() {
    this.auth.signOut().then(()=> this.r.navigate(["login"]));
  }



}
