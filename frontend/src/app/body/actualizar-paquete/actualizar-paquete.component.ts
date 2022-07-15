import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {GetDataServService} from "../../getDataService/get-data-serv.service";

@Component({
  selector: 'app-actualizar-paquete',
  templateUrl: './actualizar-paquete.component.html',
  styleUrls: ['./actualizar-paquete.component.css']
})

export class ActualizarPaqueteComponent implements OnInit {
  data:FormGroup;

  constructor(private httpclien:HttpClient, private getDataServ:GetDataServService) {
    this.data = new FormGroup({
      idPaqueteDetalle: new FormControl('',[Validators.required]),
      estado: new FormControl('',[Validators.required]),
      reportadoPor: new FormControl('',[Validators.required])
    })
  }
  update(){
    let params ={
      idPaqueteDetalle:this.data.value.idPaqueteDetalle,
      estado:this.data.value.estado,
      reportadoPor: this.data.value.reportadoPor,
      notificado: 0
    };

    this.httpclien.put('http://localhost:3030/api/bd/c',params).subscribe(res=>{
      console.log(res);
    });
  }


  ngOnInit(): void {
  }

}
