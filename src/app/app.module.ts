import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SwiperModule } from 'angular2-useful-swiper';

import { AppComponent } from './app.component';
import { RestService } from './service/rest.service';
import { NoticeTypeService } from './service/notice-type.service';
import { NoticeService } from './service/notice.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SwiperModule
  ],
  providers: [
    RestService,
    NoticeTypeService,
    NoticeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
