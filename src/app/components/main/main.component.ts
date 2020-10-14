import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { NavbarComponent } from './../navbar/navbar.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private user: UserService, private route: Router) { }

  ngOnInit(): void {
    if (this.user.user == undefined) {
      this.route.navigate(["/login"])
    }
  }
}
