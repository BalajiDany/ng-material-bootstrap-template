import { TestBed } from '@angular/core/testing';

import { NavigationManagerService } from './navigation-manager.service';

describe('NavigationManagerService', () => {
    let service: NavigationManagerService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(NavigationManagerService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
