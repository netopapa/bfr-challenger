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

  public saveOpenedNotice(id: number): void {
    let opens: number[] = [];

    if (localStorage.getItem('opens')) {
      opens = JSON.parse(localStorage.getItem('opens'));
      opens.push(id);
    }

    opens.push(id);
    localStorage.setItem('opens', JSON.stringify(opens));
  }

  public getOpeneds(): number[] {
    return localStorage.getItem('opens') ? JSON.parse(localStorage.getItem('opens')) : [];
  }

  public isOpened(id: number): boolean {
    const found = this.getOpeneds().find((ntcs) => ntcs === id);
    if (found) {
      return true;
    }

    return false;
  }

}
