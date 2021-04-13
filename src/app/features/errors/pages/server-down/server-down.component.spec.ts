import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerDownComponent } from './server-down.component';

describe('ServerDownComponent', () => {
    let component: ServerDownComponent;
    let fixture: ComponentFixture<ServerDownComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ServerDownComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ServerDownComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
