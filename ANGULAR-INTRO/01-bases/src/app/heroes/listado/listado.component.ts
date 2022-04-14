import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes : string []=['Batman','Superman','Spiderman','Capitan America'] 
  heroeBorrado : string = '';
  eliminarHeroe(){
    this.heroeBorrado = this.heroes.shift()||'';
    
  } 
}
