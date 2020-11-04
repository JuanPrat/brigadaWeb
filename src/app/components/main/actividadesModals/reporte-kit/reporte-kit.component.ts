import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImplementosService } from 'src/app/services/implementos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reporte-kit',
  templateUrl: './reporte-kit.component.html',
  styleUrls: ['./reporte-kit.component.scss']
})
export class ReporteKitComponent implements OnInit {
  form:FormGroup;
  kit:string;

  constructor(private fb:FormBuilder,
     private implementosServ: ImplementosService,
     private modalServ:NgbModal) { }

  ngOnInit(): void {
    debugger
    this.kit;
    this.form = this.fb.group({
      algodon: [],
      curas: [],
      fosforos: [],
      gasas: [],
      linterna: [],
      microporo: [],
      paletasMadera: [],
      solucionSalina: [],
      tijeras: []
    })
  }

  reportarKit(){
    console.log(this.form)
    const algodon = this.form.controls['algodon'].value;
    const curas = this.form.controls['curas'].value;
    const fosforos = this.form.controls['fosforos'].value;
    const gasas = this.form.controls['gasas'].value;
    const linterna = this.form.controls['linterna'].value;
    const microporo = this.form.controls['microporo'].value;
    const paletasMadera = this.form.controls['paletasMadera'].value;
    const solucionSalina = this.form.controls['solucionSalina'].value;
    const tijeras = this.form.controls['tijeras'].value;
    this.implementosServ.reportarEstadoKit(this.kit, algodon, curas, fosforos, gasas, linterna,microporo, paletasMadera, solucionSalina, tijeras)
    .then(ans => {
      Swal.fire({title: 'Kit reportado exitosamente'});
      this.modalServ.dismissAll()
  })
  }
}
