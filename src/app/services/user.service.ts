import { Injectable } from '@angular/core';
import { firestore,auth } from 'firebase';
import { User } from './../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  user:User;

  constructor() { }

  updateUserData(){
    firestore().collection('usuarios')
    .doc(this.user.uid)
    .set({apellidos: this.user.apellidos, nombres: this.user.nombres, perfil: this.user.perfil, activo:true}, {merge: true})
  }
  
  activateUser(){
    firestore()
    .collection("usuarios")
    .doc(this.user.uid).set({activo: true}, {merge:true});
  }

  readUsers(){
    return firestore().collection('usuarios').get();
  }
}
