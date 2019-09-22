import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { History } from '../models/history';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  historyCollection: AngularFirestoreCollection<History>;

  constructor(private firestore: AngularFirestore) { 
  }
}
