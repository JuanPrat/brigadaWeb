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
    return firebase.firestore().collection('kitsPrimerosAuxilios').get() 
  }

  obtenerAudifonos(){
    return firebase.firestore().collection('audifonos').get()
  }

  actualizarDisponibilidad(coleccion:string, documento:string, disponible: boolean){
    firebase.firestore().collection(coleccion).doc(documento).set({disponible: disponible}, {merge: true})
  }

  reportarEstadoKit(kit:string, algodon, curas, fosforos, gasas, linterna,microporo, paletasMadera, solucionSalina, tijeras){
    return firebase.firestore().collection('kitsPrimerosAuxilios').doc(kit)
    .set({algodon: algodon, curas:curas, fosforos: fosforos, gasa: gasas, disponible: true, linterna:linterna,microporo: microporo, paletasMadera: paletasMadera, solucionSalina:solucionSalina, tijeras: tijeras}, {merge:true})
  }
}
