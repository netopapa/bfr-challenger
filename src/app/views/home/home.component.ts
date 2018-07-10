import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { NoticeService } from '../../service/notice.service';
import { Notice } from '../../model/comunicado.model';
import { NoticeTypeService } from '../../service/notice-type.service';
import { Router } from '@angular/router';
import { NoticeType } from '../../model/tipoComunicado.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, AfterViewInit {

    notices: Notice[];
    types: NoticeType[];

    isMobile = true;

    config = {
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        width: 150
    };

    constructor(
        private service: NoticeService,
        private typeService: NoticeTypeService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.types = [];
        this.notices = [];
        this.getTypes();
        this.getNotices();
    }

    ngAfterViewInit(): void {
        this.isDesktop();
    }

    isOpen(notice: Notice): boolean {
        return this.service.isOpened(notice.id);
    }

    filterByType(id: number): void {
        this.service.findAll().subscribe(
            notices => {
                const noticesAux: Notice[] = [];
                notices.forEach(
                    notice => {
                        if (notice.type === id) {
                            noticesAux.push(notice);
                        }
                    }
                );
                this.notices = noticesAux;
            }
        );
    }

    isDesktop(): void {
        const screenW = window.innerWidth;
        if (screenW > 600) {
            this.isMobile = false;
        }
    }

    getNotices(): void {
        this.service.findAll().subscribe(
            notices => {
                this.notices = notices;
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

    showDetails(id): void {
        this.service.saveOpenedNotice(id);
        this.router.navigate(['/single/' + id]);
    }

    tellMyType(id: number): string {
        return this.types.find((tp) => tp.type === id).name;
    }

}
