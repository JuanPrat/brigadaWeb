import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { firestore } from 'firebase';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { User } from './../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;

  constructor(private db: AngularFirestore) { }

  updateUserData() {
    firestore().collection('usuarios')
      .doc(this.user.email)
      .set({ apellidos: this.user.apellidos, nombres: this.user.nombres, perfil: this.user.perfil, activo: this.user.activo }, { merge: true })
  }

  createUser(correo, nombres, apellidos, perfil) {
    firestore().collection('usuarios').doc(correo).get().then(data => {
      debugger
      if (data != undefined) {
        firestore().collection('usuarios')
          .doc(correo)
          .set({ apellidos: apellidos, nombres: nombres, perfil: perfil, activo: false, email: correo, habilitado: true })
          .then(ans => Swal.fire({ text: 'Brigadista creado exitosamente' }))
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ya hay un correo registrado igual al ingresado',
          })
      }
    })

  }

  activateUser(activated: boolean) {
    this.user.activo = activated;
    return firestore()
      .collection("usuarios")
      .doc(this.user.email).set({ activo: activated }, { merge: true });
  }

  readUsers(): Observable<any> {
    return this.db.collection('usuarios').valueChanges()
  }

  deleteUser(email): Promise<any> {
    return this.db.collection('usuarios').doc(email).set({ habilitado: false }, { merge: true })
  }


}
