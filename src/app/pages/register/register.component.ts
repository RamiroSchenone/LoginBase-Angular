import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { UsuarioRegisterModel } from "src/app/models/usuario-register.model";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  entity: UsuarioRegisterModel = new UsuarioRegisterModel();

  constructor() {}

  ngOnInit() {}

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    console.log(this.entity);
    console.log(form);
  }
}
