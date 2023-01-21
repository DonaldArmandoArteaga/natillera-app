import { Component, OnInit } from '@angular/core'; import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-formulario-insertar-persona',
  templateUrl: './formulario-insertar-persona.component.html',
  styleUrls: ['./formulario-insertar-persona.component.css']
})
export class FormularioInsertarPersonaComponent implements OnInit {
  profileForm: FormGroup

  constructor(public dialogRef: MatDialogRef<FormularioInsertarPersonaComponent>, private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      cedula: ['', Validators.required],
      numeroPolla: ['', Validators.required],
      celular: ['', Validators.required],
      cuenta: ['', Validators.required],
      descripcion: ['', Validators.required],
      numeroCuenta: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  submit(): void {
    this.dialogRef.close(this.profileForm.value)
  }

}
