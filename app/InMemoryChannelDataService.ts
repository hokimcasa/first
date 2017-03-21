import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryChannelDataService implements InMemoryDbService{
  createDb(){
    let channels = [
      {channelId:'C00001',channelname: '通化街夜市',fee:15,description:'實體通路',createDate:'',createUser:''},
      {channelId:'C00002',channelname: '奇怪網路商城',fee:3,description:'網路通路',createDate:'',createUser:''},
      {channelId:'C00003',channelname: '某山頭小農',fee:15,description:'實體通路',createDate:'',createUser:''},
      {channelId:'C00004',channelname: '奇幻網路遊戲',fee:5,description:'實體+網路通路',createDate:'',createUser:''},
    ];
    return {channels};
  }
} 
