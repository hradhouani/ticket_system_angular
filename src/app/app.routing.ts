import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {PagesComponent} from './pages/pages.component';
import {BlankComponent} from './pages/blank/blank.component';
import {ServersComponent} from './pages/servers/servers.component';
import {SearchComponent} from './pages/search/search.component';
import {NotFoundComponent} from './pages/errors/not-found/not-found.component';
import {ErrorComponent} from './pages/errors/error/error.component';
import {AuthGuard} from './guards/auth.guard';
import {GuestGuard} from './guards/guest.guard';
import {RoleGuard} from './guards/role.guard';

export const routes: Routes = [
    {
        path: '',
        component: PagesComponent, children: [
            {path: '', loadChildren: './pages/dashboard/dashboard.module#DashboardModule', data: {breadcrumb: 'Accueill'}},
            {path: 'servers', loadChildren: './pages/servers/servers.module#ServersModule', data: {breadcrumb: 'Servers'}},
            {path: 'roles', loadChildren: './pages/roles/roles.module#RolesModule', data: {breadcrumb: 'Roles'}},
            {path: 'clients', loadChildren: './pages/clients/clients.module#ClientsModule', data: {breadcrumb: 'Clients'}},
            {path: 'users', loadChildren: './pages/users/users.module#UsersModule', data: {breadcrumb: 'Users'}},
            {path: 'agenda', loadChildren: './pages/agenda/agenda.module#AgendaModule', data: {breadcrumb: 'Agenda'}},
            {path: 'tickets', loadChildren: './pages/tickets/tickets.module#TicketsModule', data: {breadcrumb: 'Tickets'}},
           /* {
                path: 'dynamic-menu',
                loadChildren: './pages/dynamic-menu/dynamic-menu.module#DynamicMenuModule',
                data: {breadcrumb: 'Dynamic Menu'}
            },
            {path: 'ui', loadChildren: './pages/ui/ui.module#UiModule', data: {breadcrumb: 'UI'}},
            {path: 'mailbox', loadChildren: './pages/mailbox/mailbox.module#MailboxModule', data: {breadcrumb: 'Mailbox'}},
            {path: 'chat', loadChildren: './pages/chat/chat.module#ChatModule', data: {breadcrumb: 'Chat'}},
            {
                path: 'form-controls',
                loadChildren: './pages/form-controls/form-controls.module#FormControlsModule',
                data: {breadcrumb: 'Form Controls'}
            },
            {path: 'tables', loadChildren: './pages/tables/tables.module#TablesModule', data: {breadcrumb: 'Tables'}},
            {path: 'schedule', loadChildren: './pages/schedule/schedule.module#ScheduleModule', data: {breadcrumb: 'Schedule'}},
            {path: 'maps', loadChildren: './pages/maps/maps.module#MapsModule', data: {breadcrumb: 'Maps'}},
            {path: 'charts', loadChildren: './pages/charts/charts.module#ChartsModule', data: {breadcrumb: 'Charts'}},
            {path: 'drag-drop', loadChildren: './pages/drag-drop/drag-drop.module#DragDropModule', data: {breadcrumb: 'Drag & Drop'}},
            {path: 'icons', loadChildren: './pages/icons/icons.module#IconsModule', data: {breadcrumb: 'Material Icons'}},
            {path: 'blank', component: BlankComponent, data: {breadcrumb: 'Blank page'}},
            {path: 'search', component: SearchComponent, data: {breadcrumb: 'Search'}},
            {path: 'search/:name', component: SearchComponent, data: {breadcrumb: 'Search'}}*/
        ], canActivate: [AuthGuard], canActivateChild: [RoleGuard]
    },
   // {path: 'landing', loadChildren: './pages/landing/landing.module#LandingModule'},
    {path: 'login', canActivate: [GuestGuard], loadChildren: './pages/login/login.module#LoginModule'},
   // {path: 'register', canActivate: [GuestGuard], loadChildren: './pages/register/register.module#RegisterModule'},
    {path: 'error', component: ErrorComponent, data: {breadcrumb: 'Error'}},
    {path: '**', component: NotFoundComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
    //preloadingStrategy: PreloadAllModules,  // <- comment this line for activate lazy load
    // useHash: true
});
