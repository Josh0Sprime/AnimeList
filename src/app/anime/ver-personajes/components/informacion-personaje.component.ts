import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Personaje from '../interfaces/personaje';

@Component({
  selector: 'app-informacion-personaje',
  templateUrl: './informacion-personaje.component.html',
  styleUrls: ['./informacion-personaje.component.css']
})
export class InformacionPersonajeComponent {

    personaje: Personaje[] = [
      {
        nombre: '',
        anime: '',
        descripcion: '',
        imagen: ''
      }
    ];

    sizesImagen: string = '';

    cargando: string = 'lds-dual-ring';
    displayContenido: string = 'display: none;'
    imagen: string = '';

    constructor(private rutaActiva: ActivatedRoute){
      setTimeout(() => {
        this.displayContenido = 'display: block;'
        this.cargando = '';
      }, 1000);
      const { id } = rutaActiva.snapshot.params
      this.personaje[0].nombre = id;

      if(this.personaje[0].nombre === 'Deku'){
          this.personaje[0].imagen = '../../../assets/img/deku.png';
          this.personaje[0].anime = 'Boku no hero academy';
          this.personaje[0].descripcion = 'En un mundo donde tener superpoderes es lo más común, nace Izuku Midoriya, un niño sin este don que sueña con ser un superhéroe. La gente con este tipo de habilidades es conocida como Quirk y, debido a no pertenecer a esta clase, Izuku sufre bullying en su escuela por ser diferente.'
          this.sizesImagen = 'w-[40%] h-[100%]'
        }
      else if(this.personaje[0].nombre === 'Luffy'){
        this.personaje[0].imagen = '../../../assets/img/luffy.png';
        this.personaje[0].anime = 'One piece'
        this.personaje[0].descripcion = 'One Piece (Wan Pīsu). Es un Manga y Anime del autor Eiichirō Oda que narra la historia de un mundo de piratas donde todos buscan una meta: el One Piece, para convertirse en el Rey de los Piratas.'
        this.sizesImagen = 'w-[50%] h-[100%]'

      }
      else if(this.personaje[0].nombre === 'Takemichi'){
        this.personaje[0].imagen = '../../../assets/img/takemichi.png';
        this.personaje[0].anime = 'One piece'
        this.personaje[0].descripcion = 'One Piece es la historia de un chico llamado Monkey D. Luffy, quién se inspiró en Shanks, un pirata que le salvó la vida, para convertirse en el Rey de los Piratas. Al comienzo de la serie, veinticuatro años antes de la historia actual, un pirata llamado Gol D. Roger, conocido como el Rey de los Piratas, fue ejecutado, pero antes de su muerte, le dijo a la multitud de su tesoro, el One Piece. Sus palabras desataron lo que sería conocida como «la Gran Era de la Piratería», innumerables piratas se dispusieron a buscar el tesoro causando grandes problemas al Gobierno Mundial. Monkey D. Luffy se convierte en uno de ellos, deseando ser el próximo Rey de los Piratas y se dispone a reunir compañeros de tripulación y comenzar sus aventuras.'
        this.sizesImagen = 'w-[50%] h-[100%]'
      }
    }
}
