import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  images = ['djplayer.jpg', 'fans.jpg', 'pc.jpg'];
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








