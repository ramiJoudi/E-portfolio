import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { AvatarModule } from 'ngx-avatar';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment.prod';
@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   NgxPageScrollModule,NgxPageScrollCoreModule,AngularFireModule.initializeApp(environment)
    ,AvatarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
