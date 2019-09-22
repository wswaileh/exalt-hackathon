import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore'
import { User } from '../models/User';
import { AngularFireAuth } from 'angularfire2/auth';
import { async } from 'q';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  users: AngularFirestoreCollection<User>;

  constructor(private firestore: AngularFirestore, private auth: AngularFireAuth) {

    this.users = firestore.collection<User>('users');

  }

  register(user: User) {

    this.auth.auth.createUserWithEmailAndPassword(user.email, user.password).then(function (result) {

      this.users.add(user).then(function (result) {
        return true;
      })
        .catch(function (error) {
          return false;
        })

    }).catch(function () {
      return false;
    });


    return true;
  }
}
