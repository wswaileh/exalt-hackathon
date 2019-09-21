import { Component, OnInit, Input } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

import { Image } from '../../models/image';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 1500, noPause: true, showIndicators: true } }
  ]
})
export class GalleryComponent implements OnInit {

  @Input('images')images: Image[];

  constructor() { }

  ngOnInit() {
    
  }

}
