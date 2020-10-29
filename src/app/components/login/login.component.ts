import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {LoginService} from '../../services/login.service';
import Swal from 'sweetalert2';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,
     private loginService: LoginService,
      private route:Router,
      private userService:UserService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ["", Validators.email],
      pass: ["",Validators.minLength(6)]
    }); 
  }

  login(){
    const email = this.form.controls['email'].value;
    const pass = this.form.controls['pass'].value;
    this.loginService.login(email,pass)
    .then(answer => {
      answer === undefined ? Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Al parecer hubo un error con los datos suministrados.',
    }) : this.procedToMain(answer)});
  }

  procedToMain(answer:any){
    this.loginService.getUserDB(answer.user.uid, answer.user.email)
    .then(ans => {
      this.userService.activateUser()
      this.route.navigate([""])
    })
  }

}
