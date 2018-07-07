import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { RestService } from './rest.service';
import { Constant } from '../constants/constants';
import { NoticeType } from '../model/tipoComunicado.model';

@Injectable()
export class NoticeTypeService extends RestService {

  baseURL = Constant.BASE_URL + Constant.NOTICE_TYPE;

  constructor(http: Http) {
    super(http);
   }

   public findAll(): Observable<NoticeType[]> {
    return this.get(this.baseURL);
  }

}
