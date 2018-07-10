import { TestBed, async } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
describe('Header Component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HeaderComponent
            ],
        }).compileComponents();
    }));

    it('Deve criar o componente Header', async(() => {
        const fixture = TestBed.createComponent(HeaderComponent);
        const header = fixture.debugElement.componentInstance;
        expect(header).toBeTruthy();
    }));

    it('Deve renderizar uma tah h4 dentro do header', async(() => {
        const fixture = TestBed.createComponent(HeaderComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h4').textContent).toContain('Comunicados');
    }));
});
