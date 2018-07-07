import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { RestService } from './rest.service';
import { Constant } from '../constants/constants';
import { Notice } from '../model/comunicado.model';

@Injectable()
export class NoticeService extends RestService {

  baseURL = Constant.BASE_URL + Constant.NOTICE;

  constructor(http: Http) {
    super(http);
   }

   public findAll(): Observable<Notice[]> {
    return this.get(this.baseURL);
  }

}
