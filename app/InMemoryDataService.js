"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var members = [
            { id: 'A123456789', name: '張三蚵仔煎', channelId: 'C00001', fee: '99', mobileNO: '0987654321', accountNo: 'F789745', email: 'test1@sample.com', address: '106臺北市大安區新生南路2段86號',
                webSite: 'http://sample1.com.tw', createDate: new Date('2010-10-29'), createUser: '', lastUpdate: '', updateUser: '' },
            { id: 'B234567898', name: '李四高麗菜', channelId: 'C00003', fee: '', mobileNO: '0912345678', accountNo: '', email: 'test2@sample.com', address: '台北市松山區八德路四段692號7-11樓',
                webSite: 'http://sample2.com.tw', createDate: new Date('2010-10-29'), createUser: '', lastUpdate: '', updateUser: '' },
            { id: '88888888', name: '路人排骨', channelId: 'C00001', fee: '', mobileNO: '0933456746', accountNo: '', email: 'test3@sample.com', address: '臺北市大安區新生南路2段86號',
                webSite: 'http://sample3.com.tw', createDate: new Date('2010-10-29'), createUser: '', lastUpdate: '', updateUser: '' },
            { id: '77777777', name: '新奇玩具', channelId: 'C00002', fee: '', mobileNO: '0928765573', accountNo: '', email: 'test4@sample.com', address: '臺北市文山區木柵路三段220號',
                webSite: 'http://sample4.com.tw', createDate: new Date('2010-10-29'), createUser: '', lastUpdate: '', updateUser: '' },
            { id: '77777777', name: '亨通體育用品', channelId: 'C00002', fee: '', mobileNO: '0928765574', accountNo: '', email: 'test5@sample.com', address: '臺北市中正區羅斯福路1段8號',
                webSite: 'http://sample5.com.tw', createDate: new Date('2010-10-29'), createUser: '', lastUpdate: '', updateUser: '' },
            { id: '87654321', name: '很好玩線上遊戲', channelId: 'C00004', fee: '', mobileNO: '0928765575', accountNo: '', email: 'test6@sample.com', address: '文山區興隆路二段160號',
                webSite: 'http://sample6.com.tw', createDate: new Date('2010-10-29'), createUser: '', lastUpdate: '', updateUser: '' },
            { id: '44444444', name: '像真的虛擬世界', channelId: 'C00004', fee: '', mobileNO: '0928765576', accountNo: '', email: 'test7@sample.com', address: '臺北市內湖區民權東路6段99號',
                webSite: 'http://sample7.com.tw', createDate: new Date('2010-10-29'), createUser: '', lastUpdate: '', updateUser: '' },
            { id: '55555555', name: '保證甜橘子', channelId: 'C00003', fee: '', mobileNO: '0928765577', accountNo: '', email: 'test8@sample.com', address: '臺北市萬華區和平西路3段120號',
                webSite: 'http://sample8.com.tw', createDate: new Date('2010-10-29'), createUser: '', lastUpdate: '', updateUser: '' },
            { id: '11111111', name: '萬通雜貨店', channelId: 'C00002', fee: '', mobileNO: '0928765578', accountNo: '', email: 'test9@sample.com', address: '新北市三重區新北大道一段11號',
                webSite: 'http://sample9.com.tw', createDate: new Date('2010-10-29'), createUser: '', lastUpdate: '', updateUser: '' },
            { id: '22222222', name: '纖纖蔬果汁', channelId: 'C00001', fee: '', mobileNO: '0928765579', accountNo: '', email: 'test10@sample.com', address: '台北市南港區南港路一段360號',
                webSite: 'http://sample10.com.tw', createDate: new Date('2010-10-29'), createUser: '', lastUpdate: '', updateUser: '' },
            { id: '33333333', name: '休閒漫畫店', channelId: 'C00004', fee: '', mobileNO: '0928765580', accountNo: '', email: 'test11@sample.com', address: '臺北市士林區中正路439號',
                webSite: 'http://sample11.com.tw', createDate: new Date('2010-10-29'), createUser: '', lastUpdate: '', updateUser: '' },
            { id: '12341234', name: '金剛大籠包', channelId: 'C00001', fee: '', mobileNO: '0928765581', accountNo: '', email: 'test12@sample.com', address: '臺北市大同區昌吉街57號',
                webSite: 'http://sample12.com.tw', createDate: new Date('2010-10-29'), createUser: '', lastUpdate: '', updateUser: '' },
        ];
        var channels = [
            { id: 'C00001', channelname: '通化街夜市', fee: 15, description: '實體通路', createDate: '', createUser: '' },
            { id: 'C00002', channelname: '奇怪網路商城', fee: 3, description: '網路通路', createDate: '', createUser: '' },
            { id: 'C00003', channelname: '某山頭小農', fee: 15, description: '實體通路', createDate: '', createUser: '' },
            { id: 'C00004', channelname: '奇幻網路遊戲', fee: 5, description: '實體+網路通路', createDate: '', createUser: '' },
        ];
        var transactions = [
            { id: 'T00001', date: new Date('2012-10-21'), status: '花費', money: 200, balance: 800,
                memberid: 'A123456789', remark: '' },
            { id: 'T00002', date: new Date('2012-10-25'), status: '花費', money: 200, balance: 600,
                memberid: 'A123456789', remark: '' },
            { id: 'T00003', date: new Date('2012-11-01'), status: '花費', money: 100, balance: 500,
                memberid: 'B234567898', remark: '' },
            { id: 'T00004', date: new Date('2012-11-03'), status: '儲值', money: 1000, balance: 1500,
                memberid: 'B234567898', remark: '' },
            { id: 'T00005', date: new Date('2012-11-05'), status: '花費', money: 200, balance: 1300,
                memberid: 'B234567898', remark: '' }
        ];
        return { members: members, channels: channels, transactions: transactions };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=InMemoryDataService.js.map