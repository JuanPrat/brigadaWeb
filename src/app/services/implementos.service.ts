import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ImplementosService {

  constructor() { }

  obtenerRadios(){
    return firebase.firestore().collection('radios').get()
  }

  obtenerKits(){
    return firebase.firestore().collection('kitPrimerosAuxilios').get()
  }

  obtenerAudifonos(){
    return firebase.firestore().collection('audifonos').get()
  }
}
