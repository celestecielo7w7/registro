import { Injectable } from '@angular/core';
import { IRegistro } from './interface/IRegistro';

// Injectable permite utilizar la misma instancia en varias páginas
// Se pasa como parámetro en el constructor (Injección) 
@Injectable({
    // providedIn: 'root', No Es necesario incluirlos en las librerías
    providedIn: 'root'
})
export class ClienteService {
    // Creamos un Arreglo del tipo IRegistro
    private registros: IRegistro[] =
        [{ id: "122", nombres: "Juan Gabriel", apellidos: "Picapiedras", correo: "picapiedrax@harrys.cl", clave: "1134" }
            , { id: "128", nombres: "Tito Gabril", apellidos: "Picapiedras", clave: "1134" }
            , { id: "129", nombres: "Ana Maria", apellidos: "Picapiedras"}
            , { id: "1234", nombres: "Tortuelo Jaime", apellidos: "Picapiedras" }
            , { id: "1223242", nombres: "El Gato", apellidos: "Picapiedras",  }
            , { id: "122324", nombres: "El Cocodrilo", apellidos: "Picapiedras" }
            , { id: "12232", nombres: "Mario Jose", apellidos: "Picapiedras" }]

    constructor() {
        // Revisar CUANDO y CUANTAS veces se inicia el servicio 
        console.log("Inicio Servicio****************}")
    }
    // Método que retorna la dirección del arreglo
    getRegistroMetodo(): IRegistro[] {
        return this.registros
    }
    // Nadien toca la variable, a no ser que sea por métodos 
    // que se crearán más adelante
    // por lo cual retorno una copia
    get getRegistros(): IRegistro[] {
        return [...this.registros]
    }

    // Accesador que retorna el contenido(Copia)
    get getRegistrosCopia(): IRegistro[] {
        // 3 punto retorna una copia
        return [...this.registros]
    }
    // Accesador que retorna la dirección del arreglo
    get getRegistrosReferencia(): IRegistro[] {
        return this.registros
    }

    agregarServicio(reg:IRegistro){
        this.registros.push(reg)    
        console.log("Registro Agregars:",this.registros)
    }
    actualizarServicio(id:string,reg:IRegistro){
        console.log("buscando")
        let found = this.registros.find((element) => element.id == id);
        if (found){
            // Found contiene la dirección 
            found!.apellidos=reg.apellidos
            found!.nombres=reg.nombres
            found!.clave=reg.clave
            found!.correo=reg.correo
            console.log("found",found)
            console.log("Registro Actualizar:",this.registros)
        }
    }
     eliminarServicio(id:string){
        console.log("Registro Eliminar:",this.registros)
        for (let i = this.registros.length-1; i >= 0; i--) {
            console.log("busco",i,id,this.registros[i].id)
            if (this.registros[i].id === id) {
                let spliced = this.registros.splice(i, 1);
                console.log(" Eliminado: " , this.registros,[i]);
            }
        }
        console.log("Registro Eliminar:",this.registros)
     }
     
     leerServicio(id:string):IRegistro{
        for (let i = 0; i < this.registros.length; i++) {
            if (this.registros[i].id === id) {
                return this.registros[i]
            }
        }        
        return {id:"",nombres:"",apellidos:"",correo:"",clave:""}
     }

}