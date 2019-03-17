import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about'; /*1 หน้า About*/
import { CommunityPage } from '../pages/community/community'; /*1 หน้า Community*/
import { GalleryPage } from '../pages/gallery/gallery'; /*1 หน้า gallery*/
import { SlidesPage } from '../pages/slides/slides'; /*1 หน้า slides*/

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage, /*2 หน้า About*/
    CommunityPage,/*2 หน้า Community*/
    GalleryPage, /*2 หน้า Gallery*/
    SlidesPage /*2 หน้า Slides*/
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage, /*3 หน้า About*/
    CommunityPage, /*3 หน้า Community*/
    GalleryPage, /*3 หน้า Gallery*/
    SlidesPage /*3 หน้า Slides*/
  ], 
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
