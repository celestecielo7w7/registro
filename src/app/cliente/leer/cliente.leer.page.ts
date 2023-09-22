import { Component } from '@angular/core';
import { ClienteService } from '../cliente.servicio';
import { IRegistro } from '../interface/IRegistro';
@Component({
    selector: 'app-leer',
    templateUrl: './cliente.leer.page.html',
    //styleUrls: ['./cliente.leer.page.scss'],
})
export class ClienteLeerPage {
    msgError = ""
    buttonEliminarDisabled = false
    buttonLeerDisabled = false
    buttonActualizarDisabled = false
    buttonCrearDisabled = false
    public id: string = '';
    registro:IRegistro = {
        nombres: ''
        , apellidos: ''
        , correo: ''
        , clave: ''
    }



    constructor(private cliServ:ClienteService) { }

    leer() { 
        this.registro=this.cliServ.leerServicio(this.id)
    }
    eliminar() { }
    grabar() { }
    actualizar() { }
    grabarActualizarAutomatico() { }
    // myBackButton() {this.location.back();}

}
