import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioLoginModel } from 'src/app/models/usuario-login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  entity: UsuarioLoginModel = new UsuarioLoginModel();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    console.log(this.entity);
    console.log(form);
  }
}
