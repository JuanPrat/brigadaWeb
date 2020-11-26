import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { UserService } from 'src/app/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class ImplementosService {

  constructor(private UserServ: UserService) { }

  obtenerRadios(){
    return firebase.firestore().collection('radios').get()
  }

  obtenerKits(){
    return firebase.firestore().collection('kitsPrimerosAuxilios').get() 
  }

  obtenerAudifonos(){
    return firebase.firestore().collection('audifonos').get()
  }

  actualizarDisponibilidad(coleccion:string, documento:string, disponible: boolean, brigadista:string){
    firebase.firestore().collection(coleccion).doc(documento).set({disponible: disponible, brigadista: brigadista}, {merge: true})
  }

  reportarEstadoKit(kit:string, algodon, curas, fosforos, gasas, linterna,microporo, paletasMadera, solucionSalina, tijeras){
    return firebase.firestore().collection('kitsPrimerosAuxilios').doc(kit)
    .set({algodon: algodon, curas:curas, fosforos: fosforos, gasa: gasas, disponible: true, linterna:linterna,microporo: microporo, paletasMadera: paletasMadera, solucionSalina:solucionSalina, tijeras: tijeras, brigadista: ""}, {merge:true})
  }
}
