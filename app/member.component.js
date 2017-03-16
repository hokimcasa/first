"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require('rxjs/add/operator/switchMap');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var MEMBERS = [
    { id: 11, name: 'Mr. Nice', installdate: new Date('2010-10-21'), status: "未驗證" },
    { id: 12, name: 'Mr. Nice', installdate: new Date('2010-10-29'), status: "已驗證" },
    { id: 13, name: 'Bombasto', installdate: new Date('2010-10-29'), status: "未驗證" },
    { id: 14, name: 'Celeritas', installdate: new Date('2010-10-29'), status: "已驗證" },
    { id: 15, name: 'Magneta', installdate: new Date('2010-10-29'), status: "未驗證" },
    { id: 16, name: 'RubberMan', installdate: new Date('2010-10-29'), status: "已驗證" },
    { id: 17, name: 'Dynama', installdate: new Date('2010-10-29'), status: "未驗證" },
    { id: 18, name: 'Dr IQ', installdate: new Date('2010-10-29'), status: "已驗證" },
    { id: 19, name: 'Magma', installdate: new Date('2010-10-29'), status: "未驗證" },
    { id: 20, name: 'Tornado', installdate: new Date('2010-10-29'), status: "停權" },
    { id: 21, name: 'Mr. Nice', installdate: new Date('2010-10-21'), status: "未驗證" },
    { id: 22, name: 'Mr. Nice', installdate: new Date('2010-10-29'), status: "已驗證" },
    { id: 23, name: 'Bombasto', installdate: new Date('2010-10-29'), status: "未驗證" },
    { id: 24, name: 'Celeritas', installdate: new Date('2010-10-29'), status: "已驗證" },
    { id: 25, name: 'Magneta', installdate: new Date('2010-10-29'), status: "未驗證" },
    { id: 26, name: 'RubberMan', installdate: new Date('2010-10-29'), status: "已驗證" },
    { id: 27, name: 'Dynama', installdate: new Date('2010-10-29'), status: "未驗證" },
    { id: 28, name: 'Dr IQ', installdate: new Date('2010-10-29'), status: "已驗證" },
    { id: 29, name: 'Magma', installdate: new Date('2010-10-29'), status: "未驗證" },
    { id: 30, name: 'Tornado', installdate: new Date('2010-10-29'), status: "停權" }
];
var MEMBERSSUB = MEMBERS.slice(0, 10);
var TEMP = new Array(Math.ceil(MEMBERS.length / 10)).fill(0);
var MemberComponent = (function () {
    function MemberComponent(route) {
        this.route = route;
        this.members = MEMBERS;
        this.temp = TEMP;
        this.memberssub = MEMBERSSUB;
        this.memid = 0;
        this.memidroute = 0;
    }
    MemberComponent.prototype.onSelect = function (memid) {
        var _this = this;
        this.memid = memid;
        // console.log("memid="+memid);
        this.route.params
            .subscribe(function (params) { return _this.memidroute = params['index']; });
        // console.log("memidroute="+this.memidroute);
        if (this.memidroute == 1) {
            this.memberssub = MEMBERS.slice(0, 10);
            console.log("1 memidroute=" + this.memidroute);
        }
        else {
            var temp = this.memidroute - 1;
            this.memberssub = MEMBERS.slice(0 + temp * 10, 10 + temp * 10);
            console.log("!1 memidroute=" + this.memidroute);
        }
    };
    MemberComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'member',
            templateUrl: './member.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], MemberComponent);
    return MemberComponent;
}());
exports.MemberComponent = MemberComponent;
//# sourceMappingURL=member.component.js.map