import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'brigadaWeb';

  constructor(public user:UserService){}

  HandleOnClose(){ 
    this.user.activateUser(false);
    this.user.user = undefined;
  }

}
