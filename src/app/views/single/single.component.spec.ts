import { TestBed, async } from '@angular/core/testing';
import { SingleComponent } from './single.component';

describe('Single Component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                SingleComponent
            ],
        }).compileComponents();
    }));

    it('Deve criar o componente Single', async(() => {
        const fixture = TestBed.createComponent(SingleComponent);
        const single = fixture.debugElement.componentInstance;
        expect(single).toBeTruthy();
    }));
});
