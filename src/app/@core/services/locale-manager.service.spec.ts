import { TestBed } from '@angular/core/testing';

import { LocaleManagerService } from './locale-manager.service';

describe('LocaleManagerService', () => {
    let service: LocaleManagerService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(LocaleManagerService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
