import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class BrigadistasService {

  constructor() { }

  agregarBrigadista(email: string, pass: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, pass).catch(err => {
      firebase.firestore().collection('usuarios').doc(email).set({ habilitado: true }, { merge: true })
    })
  }
}
