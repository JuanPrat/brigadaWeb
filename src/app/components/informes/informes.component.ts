import { Component, OnInit } from '@angular/core';
import { kitPrimerosAuxilios } from 'src/app/models/implementos';
import { ImplementosService } from 'src/app/services/implementos.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-informes',
  templateUrl: './informes.component.html',
  styleUrls: ['./informes.component.scss']
})
export class InformesComponent implements OnInit {
  kits: Array<kitPrimerosAuxilios> = new Array();


  constructor(private implementosServ: ImplementosService) { }

  ngOnInit(): void {
  }

  descargarInforme() {
    this.implementosServ.obtenerKits().then(metadata => metadata.docs.forEach(element => {
      console.log(element)
      debugger
      this.kits.push({
        algodon: this.transformValueIntoBussiness(element.data().algodon),
        curas: this.transformValueIntoBussiness(element.data().curas),
        fosforos: this.transformValueIntoBussiness(element.data().fosforos),
        gasa: this.transformValueIntoBussiness(element.data().gasa),
        isodine: this.transformValueIntoBussiness(element.data().isodine),
        linterna: this.transformValueIntoBussiness(element.data().linterna),
        microporo: this.transformValueIntoBussiness(element.data().microporo),
        paletasMadera: this.transformValueIntoBussiness(element.data().paletasMadera),
        solucionSalina: this.transformValueIntoBussiness(element.data().solucionSalina),
        tijeras: this.transformValueIntoBussiness(element.data().tijeras),
        nombre: element.data().nombre,
        disponible: this.transformValueIntoBussiness(element.data().disponible).toString(),
        brigadista: element.data().brigadista
      })
    })
    ).finally(() => {
      /* generate a worksheet */
      debugger
      var ws = XLSX.utils.json_to_sheet(this.kits);

      /* add to workbook */
      var wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Kits");

      /* write workbook and force a download */
      XLSX.writeFile(wb, "EstadoKits.xlsx");
    })
  }

  transformValueIntoBussiness(value: string | boolean): string {
    debugger
    switch (value) {
      case ("1"):
        return "Bajo";
        break;
      case ("2"):
        return "Medio";
        break;
      case ("3"):
        return "Alto";
        break;
      case ("true"):
        return "Disponible"
        break;
      case (true):
        return "Disponible"
        break;
      default:
        return value.toString();
        break;
    }
  }
}
