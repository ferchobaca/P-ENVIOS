import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarPaqueteComponent } from "./body/actualizar-paquete/actualizar-paquete.component";
import {AgregarComponent} from "./body/agregar/agregar.component";

const routes: Routes = [
  {path: "actualizar", component: ActualizarPaqueteComponent},
  {path: "agregar", component: AgregarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
