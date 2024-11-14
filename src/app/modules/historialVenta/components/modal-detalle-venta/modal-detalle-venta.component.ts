import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';

//angular/material
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { Venta } from '../../../../core/models/venta';
import { DetalleVenta } from '../../../../core/models/detalle-venta';

@Component({
  selector: 'app-modal-detalle-venta',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatDialogModule,
    MatGridListModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatTableModule,
    CdkTableModule,
    MatDividerModule,
    MatCardModule],
  templateUrl: './modal-detalle-venta.component.html',
  styleUrl: './modal-detalle-venta.component.scss'
})
export class ModalDetalleVentaComponent implements OnInit {

  //VARIABLES
  fechaRegistro:String = '';
  numeroDocumento:String = '';
  tipoPago:String = '';
  total:String= '';
  UsuarioDescripcion='';
  detalleVenta:DetalleVenta[]=[];
  columnasTabla:String[] = ["medicamento","cantidad","precio","total"]

  constructor(
    @Inject(MAT_DIALOG_DATA) public _venta: Venta
  ){
    this.fechaRegistro = _venta.fechaRegistro!;
    this.numeroDocumento = _venta.numDocumento!;
    this.tipoPago = _venta.tipoPago;
    this.total = _venta.totalTexto;
    this.UsuarioDescripcion = _venta.usuarioDescripcion;
    this.detalleVenta = _venta.detalleventa
  }

  ngOnInit(): void {
  }

}