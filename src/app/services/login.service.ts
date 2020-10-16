import { Injectable, EventEmitter, Output } from '@angular/core'
import { UserService } from './user.service';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private user: UserService) { }

  login(email: string, pass: string) {
    return firebase.auth().signInWithEmailAndPassword(email, pass)
      .catch(error => {console.log(error)});
  }

  getUserDB(uid:string, email:string){
    return firebase.firestore().collection("usuarios").doc(uid).get()
        .then(userDB => {
          this.user.user = {
            nombres: userDB.data().nombres,
            apellidos: userDB.data().apellidos,
            perfil: userDB.data().perfil,
            email: email
          };
        })
  }
}
