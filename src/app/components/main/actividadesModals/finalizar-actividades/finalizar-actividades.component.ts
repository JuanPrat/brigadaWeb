import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { audifonos, kitPrimerosAuxilios, radio } from 'src/app/models/implementos';
import { ImplementosService } from 'src/app/services/implementos.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { ReporteKitComponent } from '../reporte-kit/reporte-kit.component';

@Component({
  selector: 'app-finalizar-actividades',
  templateUrl: './finalizar-actividades.component.html',
  styleUrls: ['./finalizar-actividades.component.scss']
})
export class FinalizarActividadesComponent implements OnInit {

  @ViewChild('inputAudifonos', { static: true }) inputAudifonos: ElementRef;
  @ViewChild('inputRadios', { static: true }) inputRadios: ElementRef;
  @ViewChild('inputKits', { static: true }) inputKits: ElementRef;
  radios: Array<radio> = new Array();
  audifonos: Array<audifonos> = new Array();
  kits: Array<kitPrimerosAuxilios> = new Array();
  showRadios: boolean = false;
  showAudifonos: boolean = false;
  showKits: boolean = false;
  radioSelected: string;
  audifonoSelected: string;
  kitSelected: string;

  constructor(private userService: UserService, private implementosServ: ImplementosService, private modalService: NgbModal) { } 

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
        algodon: element.data().algodon,
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

  activarTablas() {
    if (this.inputAudifonos.nativeElement.checked) {
      this.showAudifonos = true;
    }
    else {
      this.showAudifonos = false;
    }
    if (this.inputRadios.nativeElement.checked) {
      this.showRadios = true;
    }
    else {
      this.showRadios = false;
    }
    if (this.inputKits.nativeElement.checked) {
      this.showKits = true;
    }
    else {
      this.showKits = false;
    }
  }

  desactivarBrigadista() {
    if (this.inputAudifonos.nativeElement.checked) {
      this.implementosServ.actualizarDisponibilidad('audifonos', 'audifonos' + this.audifonoSelected, true)
    }

    if (this.inputRadios.nativeElement.checked) {
      this.implementosServ.actualizarDisponibilidad('radios', 'radio' + this.radioSelected, true)
    }

    if (this.inputKits.nativeElement.checked) {
      this.implementosServ.actualizarDisponibilidad('kitPrimerosAuxilios', 'kit' + this.kitSelected, true)
    }
    this.userService.activateUser(false).then(ans => {
      Swal.fire({ title: "Haz finalizado tus labores de brigadista" })
      this.modalService.dismissAll();
      if(this.kitSelected != undefined){
        ReporteKitComponent.prototype.kit = 'kit'+this.kitSelected
        this.modalService.open(ReporteKitComponent, {centered: true})
      }
    })
      .catch(() => Swal.fire({ title: 'ocurrio un error en el incio. por favor intentalo otra vez' }))
  };

  

}
