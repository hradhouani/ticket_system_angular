import {BrowserModule} from '@angular/platform-browser';
import {NgModule,LOCALE_ID } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {OverlayContainer} from '@angular/cdk/overlay';
import {CustomOverlayContainer} from './theme/utils/custom-overlay-container';
import { MAT_DATE_LOCALE } from '@angular/material';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';


import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {PERFECT_SCROLLBAR_CONFIG} from 'ngx-perfect-scrollbar';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    wheelPropagation: true,
    suppressScrollX: true
};

import {CalendarModule} from 'angular-calendar';
import {SharedModule} from './shared/shared.module';
import {PipesModule} from './theme/pipes/pipes.module';
import {routing} from './app.routing';

import {AppSettings} from './app.settings';
import {AppComponent} from './app.component';
import {PagesComponent} from './pages/pages.component';
import {BlankComponent} from './pages/blank/blank.component';
import {SearchComponent} from './pages/search/search.component';
import {NotFoundComponent} from './pages/errors/not-found/not-found.component';
import {ErrorComponent} from './pages/errors/error/error.component';
import {TopInfoContentComponent} from './theme/components/top-info-content/top-info-content.component';
import {SidenavComponent} from './theme/components/sidenav/sidenav.component';
import {VerticalMenuComponent} from './theme/components/menu/vertical-menu/vertical-menu.component';
import {HorizontalMenuComponent} from './theme/components/menu/horizontal-menu/horizontal-menu.component';
import {FlagsMenuComponent} from './theme/components/flags-menu/flags-menu.component';
import {FullScreenComponent} from './theme/components/fullscreen/fullscreen.component';
import {ApplicationsComponent} from './theme/components/applications/applications.component';
import {MessagesComponent} from './theme/components/messages/messages.component';
import {UserMenuComponent} from './theme/components/user-menu/user-menu.component';
import {FavoritesComponent} from './theme/components/favorites/favorites.component';
import {HttpClientModule} from '@angular/common/http';

registerLocaleData(localeFr, 'fr');

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        PerfectScrollbarModule,
        CalendarModule.forRoot(),
        SharedModule,
        HttpClientModule,
        PipesModule,
        routing
    ],
    declarations: [
        AppComponent,
        PagesComponent,
        BlankComponent,
        SearchComponent,
        NotFoundComponent,
        ErrorComponent,
        TopInfoContentComponent,
        SidenavComponent,
        VerticalMenuComponent,
        HorizontalMenuComponent,
        FlagsMenuComponent,
        FullScreenComponent,
        ApplicationsComponent,
        MessagesComponent,
        UserMenuComponent,
        FavoritesComponent
    ],
    providers: [
        AppSettings,
        {provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG},
        {provide: OverlayContainer, useClass: CustomOverlayContainer},
        { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },
        { provide: LOCALE_ID, useValue: "fr-FR" }
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
