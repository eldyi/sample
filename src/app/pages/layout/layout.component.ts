import { HttpsService } from './../../service/https.service';
import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor(
    private http: HttpsService,
    public menu: MenuController,
    private router: Router
  ) {
    this.router.events.subscribe((event: Event) => {
      console.log('sample');
      if (event instanceof NavigationEnd) {
        this.showTabs = ['/*/chat'];
      }
    });
  }
  showTabs;
  ngOnInit() {
    this.http.me().subscribe((res: any) => console.log(res));
  }
}
