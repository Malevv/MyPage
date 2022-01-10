import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  images = ['djplayer.jpg', 'pc.jpg','fans.jpg'];
  headlines = [
    
    'always work with the best hardware',
    'with professional software, a new star is born',
    'let the music feels like the best moment in your life'
  ];

  currentIMAGE = 0;
  showIMAGE = true;

  ngOnInit() {
    this.updateImage();

  }

  updateImage() {

    setInterval(() => {
      this.currentIMAGE++;
      this.currentIMAGE = this.currentIMAGE % this.images.length;
      this.showIMAGE = false;

      setTimeout(() => {
        this.showIMAGE = true;
      }, 10);
    }, 8000);
  }



}
