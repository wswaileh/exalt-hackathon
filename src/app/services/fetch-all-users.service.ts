import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { User } from 'firebase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchAllUsersService {

  usersCollection: AngularFirestoreCollection<User>;

  constructor(private firestore: AngularFirestore) {
 }

   getAllUsers(){
     return this.firestore.collection("users").valueChanges();

   }
}
