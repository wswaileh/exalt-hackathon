import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { Image } from 'src/app/models/image';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true } }
  ]
})
export class HomeComponent implements OnInit {

  images: Image[];

  constructor() { }

  ngOnInit() {
    this.images = [];
    this.images.push( new Image(
      'https://valor-software.com/ngx-bootstrap/assets/images/nature/7.jpg',
      'Alt 1',
      'Image 1',
      'First Image!'
    ));
    this.images.push( new Image(
      'https://valor-software.com/ngx-bootstrap/assets/images/nature/8.jpg',
      'Alt 2',
      'Image 2',
      'Second Image!'
    ));
    this.images.push( new Image(
      'https://valor-software.com/ngx-bootstrap/assets/images/nature/1.jpg',
      'Alt 3',
      'Image 3',
      'Third Image!'
    ));
    
  }

}
