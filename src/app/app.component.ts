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
  fancy_img: string = './assets/images/clean-img.png'
  fancy_img_2: string = './assets/images/26.svg'
  led_img: string = './assets/images/star_link.db9cfb6d7450ccfa154e.jpg'
  led_counter: string = './assets/images/startrolls1.png'
  led_counter_2: string = './assets/images/startrolls2.png'
  led_counter_3: string = './assets/images/startrolls3.png'
  logo_1: string = './assets/images/metrex.png'
  logo_2: string = './assets/images/midmarklogo.png'
  logo_3: string = './assets/images/mindraylogo.png'
  logo_4: string = './assets/images/ndc_logo.png'
  footer_banner_upper: string = './assets/images/btm-bdr.svg'
  footer_logo: string = './assets/images/logo-ftr.png'
  footer_insta: string = './assets/images/ins.png'
  footer_face: string = './assets/images/fb.png'
  footer_tweet: string = './assets/images/tw.png'
  callFun() {
    dropdown();
  }
}
