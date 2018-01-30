import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
//import { ProfilePage } from "../pages/profile/profile";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from "../pages/tabs/tabs";

import { InfoPage } from "../pages/info/info";
import { RelativesPage } from "../pages/relatives/relatives";
import { CreditPage } from "../pages/credit/credit"; 

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    //ProfilePage,
    InfoPage,
    RelativesPage,
    CreditPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    //ProfilePage,
    InfoPage,
    RelativesPage,
    CreditPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
