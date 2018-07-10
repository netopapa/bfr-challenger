import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NoticeService } from '../../service/notice.service';
import { NoticeTypeService } from '../../service/notice-type.service';

import { Notice } from '../../model/comunicado.model';
import { NoticeType } from '../../model/tipoComunicado.model';

@Component({
    selector: 'app-single',
    templateUrl: './single.component.html',
    styleUrls: ['./single.component.scss']
})

export class SingleComponent implements OnInit {

    notice: Notice;
    types: NoticeType[];

    constructor(
        private servie: NoticeService,
        private typeService: NoticeTypeService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.notice = new Notice();
        this.types = [];

        const id = this.activatedRoute.snapshot.paramMap.get('id');
        // tslint:disable-next-line:radix
        this.getNotice(parseInt(id));

        this.getTypes();
    }

    getNotice(id: number): void {
        this.servie.findAll().subscribe(
            notices => {
                this.notice = notices.find((ntc) => ntc.id === id);
            }
        );
    }

    getTypes(): void {
        this.typeService.findAll().subscribe(
            types => {
                this.types = types;
            }
        );
    }

    tellMyType(id: number): string {
        const found = this.types.find((tp) => tp.type === id);
        if (found) {
            return found.name;
        }
    }

    toHome(): void {
        this.router.navigate(['/']);
    }

}
