import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { UserService } from './user.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Programacion } from '../models/programacion';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  datesScheduled: Array<any>;

  constructor(private user: UserService, private db: AngularFirestore) { }

  scheduleDay(start, hours, datesScheduled:Array<Programacion>) {
    debugger
    let usuarioNombre = this.user.user.nombres + " " + this.user.user.apellidos;
    let title = usuarioNombre + " - " + hours
    datesScheduled.push(new Programacion(start, title));
    firebase.firestore().collection('programacion').doc(this.user.user.email).set({datesScheduled});
  }


  readDb():Observable<any> {
    return this.db.collection('programacion').doc(this.user.user.email).valueChanges();
  }









}
