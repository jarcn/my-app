import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 11, name: '鲁班'},
      {id: 12, name: '兰陵王'},
      {id: 13, name: '亚瑟'},
      {id: 14, name: '虞姬'},
      {id: 15, name: '妲己'},
      {id: 16, name: '周瑜'},
      {id: 17, name: '李白'},
      {id: 18, name: '张飞'},
      {id: 19, name: '李逵'},
      {id: 20, name: '赵云'},
      {id: 21, name: '潘长江'},
      {id: 22, name: '韩红'},
      {id: 23, name: '阿里云'}
    ];
    return {heroes};
  }
}
