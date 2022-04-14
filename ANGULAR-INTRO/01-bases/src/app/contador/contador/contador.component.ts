import { Component } from "@angular/core";


@Component({
    selector: 'app-contador',
    template: `
        <h1>{{titulo}}</h1>
        <h3>Las base es: <strong>{{base}}</strong></h3>
        <button (click)="acumulador(base)">+ {{base}}</button>
        <span>{{numero}}</span>
        <button (click)="acumulador(-base)">- {{base}}</button>
    `
})

export class ContadorComponent{
    public titulo: string = 'Contador App';
    public numero: number = 10;
    /*
    sumar(){
    this.numero += 1;
    }

    restar(){
    this.numero -= 1;
    }
    */
    base : number = 6;

    acumulador(valor:number){
        this.numero += valor;
  }

}