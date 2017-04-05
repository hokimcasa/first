import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    let members = [
      {id:'A123456789',name:'張三蚵仔煎',channelId:'C00001',fee:'13',mobileNO:'0987654321',accountNo:'5424282625847430',email:'test1@sample.com',address:'""106臺北市大安區新生南路2段86號""',
       webSite:'http://sample1.com.tw',createDate:new Date('2010-10-29T12:00:00Z'),createUser:'',lastUpdate:'',updateUser:''},
      {id:'B234567898',name:'李四高麗菜',channelId:'C00003',fee:'',mobileNO:'0912345678',accountNo:'5447687481611782',email:'test2@sample.com',address:'台北市松山區八德路四段692號7-11樓',
       webSite:'http://sample2.com.tw',createDate:new Date('2010-10-29T11:00:00Z'),createUser:'',lastUpdate:'',updateUser:''},
       {id:'88888888',name:'路人排骨',channelId:'C00001',fee:'',mobileNO:'0933456746',accountNo:'5103141960284666',email:'test3@sample.com',address:'臺北市大安區新生南路2段86號',
       webSite:'http://sample3.com.tw',createDate:new Date('2010-10-29'),createUser:'',lastUpdate:'',updateUser:''},
       {id:'77777777',name:'新奇玩具',channelId:'C00002',fee:'',mobileNO:'0928765573',accountNo:'5177025611233076',email:'test4@sample.com',address:'臺北市文山區木柵路三段220號',
       webSite:'http://sample4.com.tw',createDate:new Date('2010-10-29'),createUser:'',lastUpdate:'',updateUser:''},
       {id:'66666666',name:'亨通體育用品',channelId:'C00002',fee:'',mobileNO:'0928765574',accountNo:'5215787439434830',email:'test5@sample.com',address:'臺北市中正區羅斯福路1段8號',
       webSite:'http://sample5.com.tw',createDate:new Date('2010-10-29'),createUser:'',lastUpdate:'',updateUser:''},
       {id:'87654321',name:'很好玩線上遊戲',channelId:'C00004',fee:'',mobileNO:'0928765575',accountNo:'4929528255046096',email:'test6@sample.com',address:'文山區興隆路二段160號',
       webSite:'http://sample6.com.tw',createDate:new Date('2010-10-29'),createUser:'',lastUpdate:'',updateUser:''},
       {id:'44444444',name:'像真的虛擬世界',channelId:'C00004',fee:'',mobileNO:'0928765576',accountNo:'5268536789119210',email:'test7@sample.com',address:'臺北市內湖區民權東路6段99號',
       webSite:'http://sample7.com.tw',createDate:new Date('2010-10-29'),createUser:'',lastUpdate:'',updateUser:''},
       {id:'55555555',name:'保證甜橘子',channelId:'C00003',fee:'',mobileNO:'0928765577',accountNo:'4716314122046057',email:'test8@sample.com',address:'臺北市萬華區和平西路3段120號',
       webSite:'http://sample8.com.tw',createDate:new Date('2010-10-29'),createUser:'',lastUpdate:'',updateUser:''},
       {id:'11111111',name:'萬通雜貨店',channelId:'C00002',fee:'',mobileNO:'0928765578',accountNo:'5387894723447114',email:'test9@sample.com',address:'新北市三重區新北大道一段11號',
       webSite:'http://sample9.com.tw',createDate:new Date('2010-10-29'),createUser:'',lastUpdate:'',updateUser:''},
       {id:'22222222',name:'纖纖蔬果汁',channelId:'C00001',fee:'',mobileNO:'0928765579',accountNo:'5327235636412485',email:'test10@sample.com',address:'台北市南港區南港路一段360號',
       webSite:'http://sample10.com.tw',createDate:new Date('2010-10-29'),createUser:'',lastUpdate:'',updateUser:''},
       {id:'33333333',name:'休閒漫畫店',channelId:'C00004',fee:'',mobileNO:'0928765580',accountNo:'4556536351029288',email:'test11@sample.com',address:'臺北市士林區中正路439號',
       webSite:'http://sample11.com.tw',createDate:new Date('2010-10-29'),createUser:'',lastUpdate:'',updateUser:''},
       {id:'12341234',name:'金剛大籠包',channelId:'C00001',fee:'',mobileNO:'0928765581',accountNo:'5434648486437115',email:'test12@sample.com',address:'臺北市大同區昌吉街57號',
       webSite:'http://sample12.com.tw',createDate:new Date('2010-10-29'),createUser:'',lastUpdate:'',updateUser:''},
    ];

    let channels = [
      {id:'C00001',channelname: '通化街夜市',fee:15,description:'實體通路',createDate:'',createUser:''},
      {id:'C00002',channelname: '奇怪網路商城',fee:3,description:'網路通路',createDate:'',createUser:''},
      {id:'C00003',channelname: '某山頭小農',fee:15,description:'實體通路',createDate:'',createUser:''},
      {id:'C00004',channelname: '奇幻網路遊戲',fee:5,description:'實體+網路通路',createDate:'',createUser:''},
    ];

    let transactions = [
      {id:'T00001',transactionDate:new Date('2012-10-21'),money:200,
      memberid: 'A123456789',remark:'',buyerName:'遠雄',buyerAccountNo:'4556755849763098',productList:'炒麵,餛飩麵,肉羹麵',postingDate:new Date('2010-10-28')},
      {id:'T00002',transactionDate:new Date('2012-10-25'),money:200,
      memberid: 'A123456789',remark:'',buyerName:'誠品',buyerAccountNo:'5220496195092724',productList:'滷肉飯,肉絲炒麵,水餃',postingDate:new Date('2010-11-02')},
      {id:'T00003',transactionDate:new Date('2012-11-01'),money:100,
      memberid: 'B234567898',remark:'',buyerName:'新光',buyerAccountNo:'4539335023351721',productList:'高麗菜,青江菜,冬瓜,四季豆,秀珍菇',postingDate:new Date('2010-11-08')},
      {id:'T00004',transactionDate:new Date('2012-11-03'),money:1000,
      memberid: 'B234567898',remark:'',buyerName:'寶麗',buyerAccountNo:'5556517554420687',productList:'地瓜葉,芥菜,菠菜',postingDate:new Date('2010-11-10')},
      {id:'T00005',transactionDate:new Date('2012-11-05'),money:200,
      memberid: 'B234567898',remark:'',buyerName:'Parking',buyerAccountNo:'4929154604848783',productList:'鴻禧菇,美白菇,草菇,秀珍菇,蘑菇',postingDate:new Date('2010-11-12')}
    ];

    return {members,channels,transactions};
  }

 
} 
