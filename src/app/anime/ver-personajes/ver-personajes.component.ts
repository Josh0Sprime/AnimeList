import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimeService } from 'src/app/services/anime.service';
import Personaje from './interfaces/personaje';

@Component({
  selector: 'app-ver-personajes',
  templateUrl: './ver-personajes.component.html',
  styleUrls: ['./ver-personajes.component.css']
})
export class VerPersonajesComponent {

  
  personajes: Personaje[] = [
    {
      imagen: 'https://www.egames.news/__export/1664140651901/sites/debate/img/2022/09/25/por_qux_deku_nunca_usa_su_mxscara_en_my_hero_academia.jpg_1902800913.jpg',
      nombre: 'Deku',
      gif: ''
    },
    {
      imagen: 'https://www.egames.news/__export/1663699171805/sites/debate/img/2022/09/20/luffy-_crop1663699135465.jpg_1662697397.jpg',
      nombre: 'Luffy',
      gif: ''

    },
    {
      imagen: 'https://www.geekmi.news/__export/1647285494275/sites/debate/img/2022/03/14/takemichi.jpg_1195024051.jpg',
      nombre: 'Takemichi',
      gif: ''

    },
    {
      imagen: 'https://i.scdn.co/image/ab67616d0000b27317664ce6a5f944ce8f6e81ae',
      nombre: 'Kaneki',
      gif: ''

    },
    {
      imagen: 'https://depor.com/resizer/pfVziOV4X8Vu9nwknDc-oNItlB8=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/6Y2EDIISGFGVFANEVDCR5LCG34.jpg',
      nombre: 'Goku',
      gif: ''

    },
    {
      imagen: 'http://cdn.shopify.com/s/files/1/0559/3972/7523/collections/3882661.jpg?v=1640794466',
      nombre: 'Mob',
      gif: ''

    },
    {
      imagen: 'https://www.egames.news/__export/1664140651901/sites/debate/img/2022/09/25/por_qux_deku_nunca_usa_su_mxscara_en_my_hero_academia.jpg_1902800913.jpg',
      nombre: 'Deku',
      gif: ''

    },
    {
      imagen: 'https://www.egames.news/__export/1663699171805/sites/debate/img/2022/09/20/luffy-_crop1663699135465.jpg_1662697397.jpg',
      nombre: 'Luffy',
      gif: ''

    },
    {
      imagen: 'https://www.geekmi.news/__export/1647285494275/sites/debate/img/2022/03/14/takemichi.jpg_1195024051.jpg',
      nombre: 'Takemichi',
      gif: ''

    },
    {
      imagen: 'https://i.scdn.co/image/ab67616d0000b27317664ce6a5f944ce8f6e81ae',
      nombre: 'Kaneki',
      gif: ''

    },
    {
      imagen: 'https://depor.com/resizer/pfVziOV4X8Vu9nwknDc-oNItlB8=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/6Y2EDIISGFGVFANEVDCR5LCG34.jpg',
      nombre: 'Goku',
      gif: ''

    },
    {
      imagen: 'http://cdn.shopify.com/s/files/1/0559/3972/7523/collections/3882661.jpg?v=1640794466',
      nombre: 'Mob',
      gif: ''

    }
  ]
  constructor(private animeS: AnimeService, private router: Router){
    
  }

  verPersonaje(nombre: any){
    this.router.navigate(['/Personajes', nombre])
  }
}
