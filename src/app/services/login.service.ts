import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private db:AngularFirestore) { }

  login(email:string, pass:string){
    return firebase.auth().signInWithEmailAndPassword(email, pass)
    .catch(error => {console.log(error)})
  }

  checkEmailOnBd(email:string){
    
  }

  
}
