import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ImplementosService } from 'src/app/services/implementos.service';
import { audifonos, kitPrimerosAuxilios, radio } from '../../../../models/implementos'


@Component({
  selector: 'app-iniciar-actividades',
  templateUrl: './iniciar-actividades.component.html',
  styleUrls: ['./iniciar-actividades.component.scss']
})
export class IniciarActividadesComponent implements OnInit {
  radios: Array<radio> = new Array();
  audifonos: Array<audifonos> = new Array();
  kits: Array<kitPrimerosAuxilios> = new Array();

  constructor(private userService: UserService, private implementosServ: ImplementosService) { }

  ngOnInit(): void {
    this.implementosServ.obtenerRadios().then(radiosMetadata => radiosMetadata.forEach(element => {
      this.radios.push({
        nombre: element.data().nombre,
        disponible: element.data().disponible
      })
    }))
    this.implementosServ.obtenerAudifonos().then(Metadata => Metadata.forEach(element => {
      this.audifonos.push({
        nombre: element.data().nombre,
        disponible: element.data().disponible
      })
    }))
    this.implementosServ.obtenerKits().then(Metadata => Metadata.forEach(element => {
      this.kits.push({
        algodón: element.data().algodón,
        curas: element.data().curas,
        fosforos: element.data().fosforos,
        gasa: element.data().gasa,
        isodine: element.data().isodine,
        linterna: element.data().linterna,
        microporo: element.data().microporo,  
        paletasMadera: element.data().paletasMadera,
        solucionSalina: element.data().solucionSalina,
        tijeras: element.data().tijetas,
        nombre: element.data().nombre,
        disponible: element.data().disponible
      })
    }))
  }

  selectOnCheck(event){
  
  }

  activar(){
    this.userService.activateUser(true);
  }

}
