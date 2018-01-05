import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 style="align-content: center">{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">仪表盘</a>
      <a routerLink="/heroes" routerLinkActive="active">英雄列表</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '王者农药';
}

/*
  整个项目的外壳,项目中所有组件的集中地
 */
