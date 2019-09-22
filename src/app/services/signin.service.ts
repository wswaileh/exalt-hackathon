import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth, User } from 'firebase';
import { Router } from  "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class SigninService {

  user: User;

  constructor(private firebaseAuth: AngularFireAuth , private router: Router) {


    this.firebaseAuth.authState.subscribe(user => {
      if (user){
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    })

   }


  GoogleLogin(){
    this.firebaseAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider);
  }

  async loginWithEmailAndPassword(email: string, password: string) {
    var result = await this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
    this.router.navigate(['user-home']);
}
  
}
