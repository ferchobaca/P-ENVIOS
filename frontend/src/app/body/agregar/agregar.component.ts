import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {GetDataServService} from "../../getDataService/get-data-serv.service";

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  data:FormGroup;

  constructor(private httpclien:HttpClient) {


    this.data = new FormGroup({
      fechaRegistro: new FormControl('',[Validators.required]),
      remitente: new FormControl('',[Validators.required]),
      destinatario: new FormControl('',[Validators.required]),
      direccion: new FormControl('',[Validators.required]),
      municipio: new FormControl('',[Validators.required]),
      colonia: new FormControl('',[Validators.required]),
      estado: new FormControl('',[Validators.required]),
      latitud: new FormControl('',[Validators.required]),
      longitud: new FormControl('',[Validators.required]),
      peso: new FormControl('',[Validators.required]),
      dimensionX: new FormControl('',[Validators.required]),
      dimensionY: new FormControl('',[Validators.required]),
      dimensionZ: new FormControl('',[Validators.required]),
      correoNotif: new FormControl('',[Validators.required])
      });
  }

  addRegister(){
    let params ={
      fechaRegistro:this.data.value.fechaRegistro,
      remitente:this.data.value.remitente,
      destinatario:this.data.value.destinatario,
      direccion:this.data.value.direccion,
      municipio:this.data.value.municipio,
      colonia:this.data.value.colonia,
      estado:this.data.value.estado,
      latitud:this.data.value.latitud,
      longitud:this.data.value.longitud,
      peso:this.data.value.peso,
      dimensionX:this.data.value.dimensionX,
      dimensionY:this.data.value.dimensionY,
      dimensionZ: this.data.value.dimensionZ,
      correoNotif: this.data.value.correoNotif
    };
    this.httpclien.post('http://localhost:3030/api/bd/a',params).subscribe(res=>{
      console.log(res);
    });
  }
  ngOnInit(): void {
  }

}
