import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about'; /* 1 import หน้า About */
import { CommunityPage } from '../community/community'; /* 1 import หน้า community */
import { GalleryPage } from '../gallery/gallery'; /* 1 import หน้า gallery */
import { SlidesPage } from '../slides/slides'; /* 1 import หน้า slides */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  gotoAbout(){
    this.navCtrl.push(AboutPage);
  } /*2 สร้างโมดูล ไปที่หน้า About */

  gotoCommunity(){
    this.navCtrl.push(CommunityPage);
  } /*2 สร้างโมดูล ไปที่หน้า Community "pust" เป็นการเข้าไปที่หน้านั้นๆ แบบ Stack */

  gotoGallery(){
    this.navCtrl.setRoot(GalleryPage);
  } /*2 สร้างโมดูล ไปที่หน้า Gallery "setRoot" เป็นการเข้าไปที่หน้านั้นๆ แบบไม่ให้กดปุ่มย้อนกลับ */

  gotoSlides(){
    this.navCtrl.push(SlidesPage);
  } /*2 สร้างโมดูล ไปที่หน้า Slides "pust" เป็นการเข้าไปที่หน้านั้นๆ แบบ Stack */
}
