import { Injectable } from '@angular/core';
import { DocumentData, QuerySnapshot } from '@angular/fire/firestore';
import { firestore,auth } from 'firebase';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
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

  createUser(uid, nombres, apellidos, perfil){
    firestore().collection('usuarios')
    .doc(uid)
    .set({apellidos: apellidos, nombres: nombres, perfil: perfil, activo:false})
    .then(ans => Swal.fire({text: 'Brigadista creado exitosamente'}))
  }
  
  activateUser(activated: boolean){
    firestore()
    .collection("usuarios")
    .doc(this.user.uid).set({activo: activated}, {merge:true});
  }

  readUsers(){
    return firestore().collection('usuarios').get();
  }
}
