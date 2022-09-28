import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { UserDataService } from '../service/user-data.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  expert_img_1: string = './assets/images/i22024.jpg'
  expert_img_2: string = './assets/images/i19121.jpg'
  expert_img_3: string = './assets/images/i19121.jpg'
  expert_img_4: string = './assets/images/iv15810.jpg'
  users: any;
  constructor(private userData: UserDataService) {

    this.userData.users().subscribe((data) => {
      this.users = data;
    })
  }
  ngOnInit(): void {
  }

}
