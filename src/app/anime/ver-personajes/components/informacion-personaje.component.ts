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
        imagen: '',
        gif: []
      }
    ];

    sizesImagen: string = '';

    cargando: string = 'lds-dual-ring';
    displayContenido: string = 'hidden grid grid-cols-2 h-full space-x-10'
    imagen: string = '';

    constructor(private rutaActiva: ActivatedRoute){
      setTimeout(() => {
        this.displayContenido = 'block grid grid-cols-2 h-full space-x-10'
        this.cargando = '';
      }, 1000);
      const { id } = rutaActiva.snapshot.params
      this.personaje[0].nombre = id;

      if(this.personaje[0].nombre === 'Deku'){
          this.personaje[0].imagen = '../../../assets/img/deku.png';
          this.personaje[0].anime = 'Boku no hero academy';
          this.personaje[0].descripcion = 'En un mundo donde tener superpoderes es lo más común, nace Izuku Midoriya, un niño sin este don que sueña con ser un superhéroe. La gente con este tipo de habilidades es conocida como Quirk y, debido a no pertenecer a esta clase, Izuku sufre bullying en su escuela por ser diferente.'
          this.personaje[0].gif = [
            'https://media.tenor.com/IumafqEjUOAAAAAd/boku-no-hero-my-hero-academia.gif',
            'https://c.tenor.com/WnLb92xeN-kAAAAC/bnha-boku-no-hero-academia.gif',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxfV32Cmq85U4RmgTODkO0f797vVnLO9eoYg&usqp=CAU'
          ]
          this.sizesImagen = 'w-full h-[800px]';
        }
      else if(this.personaje[0].nombre === 'Luffy'){
        this.personaje[0].imagen = '../../../assets/img/luffy.png';
        this.personaje[0].anime = 'One piece'
        this.personaje[0].descripcion = 'One Piece (Wan Pīsu). Es un Manga y Anime del autor Eiichirō Oda que narra la historia de un mundo de piratas donde todos buscan una meta: el One Piece, para convertirse en el Rey de los Piratas.'
        this.personaje[0].gif = [
          'https://img.wattpad.com/9b8bb2800d0ec33d702aa03b3d3790937fbd1c89/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f5376655673534a5674714b4268673d3d2d38312e313462656138353739303063353933333935343631323934363832382e676966',
          'https://i.pinimg.com/originals/b5/ac/5e/b5ac5ef0e1eba9b81368ce86a7f5e32c.gif'
        ]
      }
      else if(this.personaje[0].nombre === 'Takemichi'){
        this.personaje[0].imagen = '../../../assets/img/takemichi.png';
        this.personaje[0].anime = 'One piece'
        this.personaje[0].descripcion = 'Serie de TV (2021). Viendo las noticias, Takemichi Hanagaki descubre que su antigua novia del instituto, Hinata Tachibana, ha sido asesinada por una banda llamada "Tokyo Manji". Takemishi vive una vida miserable y está en su punto más bajo, pero de repente viaja doce años en el pasado a sus días de instituto. Para salvar a Hinata, y cambiar su patética vida, Takemichi deberá convertirse en el delincuente callejero más peligroso.'
        this.sizesImagen = 'w-full h-[800px]';
        this.personaje[0].gif = [
          'https://aniyuki.com/wp-content/uploads/2021/07/aniyuki-tokyo-revengers-gif-64.gif',
          'https://i.pinimg.com/originals/c9/fd/91/c9fd91f0948e965d55cd1df20e514c3f.gif'
        ]
      }
    }
}
