import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

const availableThemes = [
    { id: 'default', name: 'Lignt DeepPurple & Amber' },
    { id: 'dark-pink-bluegrey', name: 'Dark Pink & BlueGrey' },
]

@Injectable({
    providedIn: 'root'
})
export class ThemeManagerService {

    public static LOCAL_STORAGE_KEY = 'data-theme';

    public static CSS_ATTRIBUTE_KEY = 'data-theme';

    public static URL_PARAM_KEY = 'hreftheme'

    constructor(
        private route: ActivatedRoute,
        @Inject(DOCUMENT) private document: Document,
    ) {
        this.restoreTheme();
        this.route.queryParamMap
            .pipe(
                map(paramMap => paramMap.get(ThemeManagerService.URL_PARAM_KEY)),
                filter(theme => this.isSupportedTheme(theme)),
            ).subscribe(theme => this.setActiveTheme(`${theme}`));
    }

    public getSupportedTheme(): { id: string, name: string }[] {
        return availableThemes;
    }

    public setActiveTheme(theme: string) {
        const isSupported = this.isSupportedTheme(theme);

        if (!isSupported) {
            // TODO: UPDATE_ME (Good to show some error)
            console.warn(`Theme not supported : ${theme}`);
            return;
        }

        this.changeTheme(theme);
    }

    private isSupportedTheme(theme: string | null): boolean {
        if (!theme) return false;

        const selectedTheme = availableThemes
            .map(({ id }) => id)
            .find(themeId => themeId === theme);

        return !!selectedTheme;
    }

    private changeTheme(theme: string): void {
        this.persistTheme(theme);
        this.reflectTheme(theme);
    }

    private persistTheme(theme: string): void {
        localStorage.setItem(ThemeManagerService.LOCAL_STORAGE_KEY, theme);
    }

    private reflectTheme(theme: string): void {
        this.document.body.setAttribute(ThemeManagerService.CSS_ATTRIBUTE_KEY, theme);
    }

    private restoreTheme(): void {
        const theme = localStorage.getItem(ThemeManagerService.LOCAL_STORAGE_KEY);
        const isSupported = this.isSupportedTheme(theme);
        if (isSupported) this.reflectTheme(`${theme}`);
    }
}
