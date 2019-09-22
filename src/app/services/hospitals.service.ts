import { Injectable } from '@angular/core';
import { Hospital } from '../models/Hospital';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class HospitalsService {

  hospitalCollection: AngularFirestoreCollection<Hospital>;

  hospitals: Observable<Hospital[]>;

  constructor(private firestore: AngularFirestore) {

      this.hospitalCollection  = firestore.collection('hospitals');

        this.hospitals = this.hospitalCollection.valueChanges();

   }
   getAllHospitals(){
     return this.hospitals;
   }
}
