import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { User } from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchUserDataService {

  usersCollection: AngularFirestoreCollection<User>;

  user: Observable<User[]>;


  constructor(private firestore: AngularFirestore) {
    this.usersCollection = firestore.collection<User>('users');
  }


  fetchData(email: string){

   this.user =  this.firestore.collection<User>("users" , ref =>  ref.where("email", "==", email)).valueChanges()
      return this.user;
  }


}
