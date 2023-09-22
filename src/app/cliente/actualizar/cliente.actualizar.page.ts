import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.servicio';

@Component({
    selector: 'app-actualizar',
    templateUrl: './cliente.actualizar.page.html',
    //styleUrls: ['./cliente.actualizar.page.scss'],
})
export class ClienteActualizarPage {
    id = "5"
    registro = {
        nombres: "Harrys",
        apellidos: "El Magnifico",
        correo: "harrys@ciudal.cl",
        clave: "macarena",
    }

    constructor(private cliServ:ClienteService) { }

    grabar() { 
        this.cliServ.actualizarServicio(this.id,this.registro)
    }


}

