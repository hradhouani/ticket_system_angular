import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';
import {AppSettings} from '../../../app.settings';
import {Settings} from '../../../app.settings.model';
import {MenuService} from '../menu/menu.service';
import {User} from '../../../pages/users/user.model';
import {environment} from "../../../../environments/environment.prod";

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [MenuService]
})
export class SidenavComponent implements OnInit {
    public psConfig: PerfectScrollbarConfigInterface = {
        wheelPropagation: true
    };
    public mediaUrl: string = environment.mediaUrl;
    public url: string = environment.url;
    public menuItems: Array<any>;
    public settings: Settings;
    public user: User;

    constructor(public appSettings: AppSettings, public menuService: MenuService) {
        this.settings = this.appSettings.settings;
    }

    ngOnInit() {
        this.menuItems = this.menuService.getVerticalMenuItems();
        this.user = JSON.parse(localStorage.getItem('user'));

    }

    ngDoCheck() {
        if (this.settings.fixedSidenav) {
            if (this.psConfig.wheelPropagation == true) {
                this.psConfig.wheelPropagation = false;
            }
        } else {
            if (this.psConfig.wheelPropagation == false) {
                this.psConfig.wheelPropagation = true;
            }
        }
    }

    public closeSubMenus() {
        let menu = document.getElementById("vertical-menu");
        if (menu) {
            for (let i = 0; i < menu.children[0].children.length; i++) {
                let child = menu.children[0].children[i];
                if (child) {
                    if (child.children[0].classList.contains('expanded')) {
                        child.children[0].classList.remove('expanded');
                        child.children[1].classList.remove('show');
                    }
                }
            }
        }
    }

}
