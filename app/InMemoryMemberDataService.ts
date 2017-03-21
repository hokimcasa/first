import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryMemberDataService implements InMemoryDbService{
  createDb(){
    let members = [
      {id:'A123456789',name:'張三蚵仔煎',channelId:'C00001',mobileNO:0987654321,accountNo:'',email:'test1@sample.com',address:'',
       webSite:'http://sample1.com.tw',createDate:new Date('2010-10-29'),createUser:'',lastUpdate:'',updateUser:''},
      {id:'B234567898',name:'李四高麗菜',channelId:'C00003',mobileNO:0912345678,accountNo:'',email:'test2@sample.com',address:'',
       webSite:'http://sample2.com.tw',createDate:new Date('2010-10-29'),createUser:'',lastUpdate:'',updateUser:''},
       {id:'88888888',name:'路人排骨',channelId:'C00001',mobileNO:0933456746,accountNo:'',email:'test3@sample.com',address:'',
       webSite:'http://sample3.com.tw',createDate:new Date('2010-10-29'),createUser:'',lastUpdate:'',updateUser:''},
       {id:'77777777',name:'新奇玩具',channelId:'C00002',mobileNO:0928765573,accountNo:'',email:'test4@sample.com',address:'',
       webSite:'http://sample4.com.tw',createDate:new Date('2010-10-29'),createUser:'',lastUpdate:'',updateUser:''},
       {id:'77777777',name:'亨通體育用品',channelId:'C00002',mobileNO:0928765574,accountNo:'',email:'test5@sample.com',address:'',
       webSite:'http://sample5.com.tw',createDate:new Date('2010-10-29'),createUser:'',lastUpdate:'',updateUser:''},
       {id:'87654321',name:'很好玩線上遊戲',channelId:'C00004',mobileNO:0928765575,accountNo:'',email:'test6@sample.com',address:'',
       webSite:'http://sample6.com.tw',createDate:new Date('2010-10-29'),createUser:'',lastUpdate:'',updateUser:''},
       {id:'44444444',name:'像真的虛擬世界',channelId:'C00004',mobileNO:0928765576,accountNo:'',email:'test7@sample.com',address:'',
       webSite:'http://sample7.com.tw',createDate:new Date('2010-10-29'),createUser:'',lastUpdate:'',updateUser:''},
       {id:'55555555',name:'保證甜橘子',channelId:'C00003',mobileNO:0928765577,accountNo:'',email:'test8@sample.com',address:'',
       webSite:'http://sample8.com.tw',createDate:new Date('2010-10-29'),createUser:'',lastUpdate:'',updateUser:''},
       {id:'11111111',name:'萬通雜貨店',channelId:'C00002',mobileNO:0928765578,accountNo:'',email:'test9@sample.com',address:'',
       webSite:'http://sample9.com.tw',createDate:new Date('2010-10-29'),createUser:'',lastUpdate:'',updateUser:''},
       {id:'22222222',name:'纖纖蔬果汁',channelId:'C00001',mobileNO:0928765579,accountNo:'',email:'test10@sample.com',address:'',
       webSite:'http://sample10.com.tw',createDate:new Date('2010-10-29'),createUser:'',lastUpdate:'',updateUser:''},
       {id:'33333333',name:'休閒漫畫店',channelId:'C00004',mobileNO:0928765580,accountNo:'',email:'test11@sample.com',address:'',
       webSite:'http://sample11.com.tw',createDate:new Date('2010-10-29'),createUser:'',lastUpdate:'',updateUser:''},
       {id:'12341234',name:'金剛大籠包',channelId:'C00001',mobileNO:0928765581,accountNo:'',email:'test12@sample.com',address:'',
       webSite:'http://sample12.com.tw',createDate:new Date('2010-10-29'),createUser:'',lastUpdate:'',updateUser:''},
    ];
    return {members};
  }
} 
