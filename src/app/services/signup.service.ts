import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore'
import { User } from '../models/User';
@Injectable({
  providedIn: 'root'
})
export class SignupService {

  users: AngularFirestoreCollection<User>;

  constructor(private firestore: AngularFirestore) {

    this.users = firestore.collection<User>('users');

  }

  register(user: User): boolean {


    this.users.add(user).then(function (result) {
      return true;
    }, function (err) {
      return false;
    });

    return false;

  }
}
