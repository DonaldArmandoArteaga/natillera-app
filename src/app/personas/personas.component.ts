import { trigger, state, style, transition, animate } from '@angular/animations';
import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormularioInsertarPersonaComponent } from '../formulario-insertar-persona/formulario-insertar-persona.component';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PersonasComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['nombre', 'numero'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: Persona | null = null;
  today: String
  personaValues: PersonaValues
  constructor(public dialog: MatDialog) {
    this.today = formatDate(new Date(), 'dd/MM/yyyy', 'en-US');
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(FormularioInsertarPersonaComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.personaValues = result
      console.log(this.personaValues)
    });
  }


}

export interface PersonaValues {
  cedula: string
  numeroPolla: string
  celular: string
  cuenta: string
  descripcion: string
  numeroCuenta: string
}


export interface Mes {
  nombre: String
  maximaFechaPago: String
  fechaPago?: String
  montoConsignado: Number
  multa?: Boolean
  pagoMulta?: Boolean
  pollas: Polla[]
}

export interface Polla {
  nombre: String
  maximaFechaPago: String
  fechaPago?: String
  multa?: Boolean
  pagoMulta?: Boolean
}

export interface Persona {
  nombre: String
  cedula: string
  cuenta: String
  numeroCuenta: string
  meses: Mes[]
  description: String
  numero: String
}

const ELEMENT_DATA: Persona[] = [
  {
    nombre: 'Donald Armando Torres Arteaga',
    cuenta: 'cuenta 1',
    description: 'Soy la pareja de Lisseth',
    cedula: "1067915832",
    numeroCuenta: "123456",
    numero: '20',
    meses: [
      {
        nombre: 'ENERO',
        fechaPago: '13-enero',
        maximaFechaPago: '05-febrero',
        montoConsignado: 70000,
        pollas: [
          {
            nombre: 'polla 1',
            fechaPago: '13-enero',
            maximaFechaPago: '15-enero',
          },
          {
            nombre: 'polla 2',
            maximaFechaPago: '30-enero',
            multa: true,
            pagoMulta: false
          }
        ]
      }
    ]
  },
  {
    nombre: 'Me llaman Romeo',
    cuenta: 'cuenta 2',
    description: 'El es romeo',
    cedula: "1067915832",
    numeroCuenta: "123456",
    numero: '21',
    meses: [
      {
        nombre: 'ENERO',
        fechaPago: '06-feb',
        multa: true,
        pagoMulta: true,
        maximaFechaPago: '05-febrero',
        montoConsignado: 50000,
        pollas: [
          {
            nombre: 'polla 1',
            maximaFechaPago: '30-enero',
            multa: true,
            pagoMulta: false
          }
        ]
      }
    ]
  }
];
