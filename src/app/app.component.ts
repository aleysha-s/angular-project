import { Component } from '@angular/core';
declare const dropdown: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularProject';
  logo: string = './assets/images/directmedsuppllies_highrestag-(1).png'
  hero_png: string = './assets/images/hero.png'
  hero_box_1: string = './assets/images/hero-overlay-one.png'
  hero_box_2: string = './assets/images/hero-overlay-two.png'
  expert_img_1: string = './assets/images/i22024.jpg'
  expert_img_2: string = './assets/images/i19121.jpg'
  expert_img_3: string = './assets/images/i19121.jpg'
  expert_img_4: string = './assets/images/iv15810.jpg'
  callFun() {
    dropdown();
  }
}
