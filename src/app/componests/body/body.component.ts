import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  mostrar = true;

  frase: any = {
    titulo: 'ejemplo de interpolacion',
    autor: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
  }

  personajes: string[] = ['Batman','Superman','Aquaman', 'Spiderman']

  }


