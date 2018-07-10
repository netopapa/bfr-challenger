import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RestService } from './service/rest.service';
import { NoticeTypeService } from './service/notice-type.service';
import { NoticeService } from './service/notice.service';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { routes } from './app.routing';
import { SwiperModule } from 'angular2-useful-swiper';
import { SingleComponent } from './views/single/single.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SingleComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    SwiperModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [
    RestService,
    NoticeTypeService,
    NoticeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
