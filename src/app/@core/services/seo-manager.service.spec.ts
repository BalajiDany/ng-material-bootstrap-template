import { TestBed } from '@angular/core/testing';

import { SeoManagerService } from './seo-manager.service';

describe('SeoManagerService', () => {
    let service: SeoManagerService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SeoManagerService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

});
