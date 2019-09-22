import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private firebaseAuth: AngularFireAuth) { }


  GoogleLogin(){
    this.firebaseAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider);
  }
  
}
