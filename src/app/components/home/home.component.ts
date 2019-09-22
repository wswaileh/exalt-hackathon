import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/models/image';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images: Image[];

  constructor() { }

  ngOnInit() {
    this.images = [];
    this.images.push( new Image(
      'https://cdn1.imggmi.com/uploads/2019/9/22/cf4f247ef5fd50d9e26ae20e7532a0f8-full.jpg',
      'Alt 1',
      'You can Save A Life!',
      'every two seconds some one in the world needs blood'
    ));
    this.images.push( new Image(
      'https://cdn1.imggmi.com/uploads/2019/9/22/3634087b21ae87860c0cb8eec591963f-full.jpg',
      'Alt 2',
      'Facts',
      'A single car accident victim can require as many as 100 units of blood!'
    ));
    this.images.push( new Image(
      'https://cdn1.imggmi.com/uploads/2019/9/22/222b40dfcc6e9127b25cba8edfc65b39-full.jpg',
      'Alt 3',
      'It is all about duty!',
      'be an efffictive citizen'
    ));

    this.images.push( new Image(
      'https://cdn1.imggmi.com/uploads/2019/9/22/76c728ba255d3de1ccde21eb024c288e-full.jpg',
      'Alt 3',
      'Join our Community Now !',
      'Your data will be private and hospitals can call for emergency'
    ));
    
  }

}
