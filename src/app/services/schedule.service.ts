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
  constructor(private user: UserService, private db: AngularFirestore) { }

  scheduleDay(start, hours, datesScheduled:nuevaProgramacion) {
    debugger
    let usuarioNombre = this.user.user.nombres + " " + this.user.user.apellidos;
    let title = usuarioNombre + " - " + hours
    datesScheduled.dates.push(new Programacion(start, title));
    const things = datesScheduled.dates.map((prog) => Object.assign({}, prog));
    const object: nuevaProgramacion = {
      dates: things
    }
    this.db.collection('programacion').doc(this.user.user.email).set(Object.assign({}, object), {merge: true});
  }

  readDb():Observable<any> {  
    return this.db.collection('programacion').doc(this.user.user.email).valueChanges();
  }
}

export class nuevaProgramacion {
  dates:Array<any>;

  constructor(){
    this.dates = [];
  }
}
