import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-finalizar-actividades',
  templateUrl: './finalizar-actividades.component.html',
  styleUrls: ['./finalizar-actividades.component.scss']
})
export class FinalizarActividadesComponent implements OnInit {

  constructor(private userService: UserService) { } 

  ngOnInit(): void {
    this.userService.activateUser(false);
  }

}
