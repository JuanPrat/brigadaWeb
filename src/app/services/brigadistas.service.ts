import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class BrigadistasService {

  constructor() { }

  agregarBrigadista(email:string, pass:string){
    return firebase.auth().createUserWithEmailAndPassword(email, pass)
  }
}
