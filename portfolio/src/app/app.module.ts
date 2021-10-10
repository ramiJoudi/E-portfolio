import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';



 
const firebaseConfig = {
  apiKey: "AIzaSyBiiMibv9t4yonIy2_1l9_lHx121T6V9io",
  authDomain: "rami-joudi.firebaseapp.com",
  projectId: "rami-joudi",
  storageBucket: "rami-joudi.appspot.com",
  messagingSenderId: "48855817350",
  appId: "1:48855817350:web:bdf3b23062366022cf4507",
  measurementId: "G-71TVTTYRRN"
};
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   NgxPageScrollModule,NgxPageScrollCoreModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
