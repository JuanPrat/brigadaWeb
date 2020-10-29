import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public user: UserService, private route:Router) { }

  ngOnInit(): void {
  }

  horarios(){
    this.route.navigate(["horarios"]);
  }

  cerrarSesion(){
    this.user.activateUser(false);
  }

}
