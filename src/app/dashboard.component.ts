/*
 定义一个可复用的组件
*/

import {Component, OnInit} from '@angular/core';
import {HeroService} from "./hero.service";
import {Hero} from "./hero";

@Component({
  //声明组件名称
  selector: 'my-dashboard',
  //定义仪表盘组件中的html模版和css路径
  templateUrl: './dashboard.component.html',
  //定义仪表盘组件中的html模版和css路径
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //声明一个Hero类型的数组，用来存放需要渲染的数据
  heroes: Hero[] = [];

  //通过构造函数注入服务
  constructor(private heroService: HeroService) {
  }

  //实现OnInit接口,复写ngOnInit方法做一些初始化动作
  ngOnInit(): void {
    //调用heroService服务查询数据
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(0, 4));
  }
}
