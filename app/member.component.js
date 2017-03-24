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
var member_service_1 = require('./member.service');
var channel_service_1 = require('./channel.service');
var MemberComponent = (function () {
    function MemberComponent(route, memberService, router, channelService) {
        this.route = route;
        this.memberService = memberService;
        this.router = router;
        this.channelService = channelService;
        this.memid = 0;
    }
    MemberComponent.prototype.getMembersInit = function () {
        var _this = this;
        console.log("InitStart");
        this.memberService.getMembers().then(function (members) {
            _this.memberssub = members.slice(0, 10);
            _this.temp = new Array(Math.ceil(members.length / 10)).fill(0);
        });
        this.channelService.getChanneles().then(function (channels) {
            _this.channels = channels;
            for (var i = 0; i < _this.memberssub.length; i++) {
                for (var j = 0; j < _this.channels.length; j++) {
                    console.log();
                    if (_this.memberssub[i].channelId === _this.channels[j].id) {
                        _this.memberssub[i].channelId = _this.channels[j].channelname;
                    }
                }
            }
        });
        console.log("InitEnd");
    };
    MemberComponent.prototype.getMembers = function (index) {
        var _this = this;
        this.memberService.getMembers().then(function (members) {
            _this.memberssub = members.slice(0 + index * 10, 10 + index * 10);
            _this.temp = new Array(Math.ceil(members.length / 10)).fill(0);
        });
        this.channelService.getChanneles().then(function (channels) {
            _this.channels = channels;
            for (var i = 0; i < _this.memberssub.length; i++) {
                for (var j = 0; j < _this.channels.length; j++) {
                    // console.log();
                    if (_this.memberssub[i].channelId === _this.channels[j].id) {
                        _this.memberssub[i].channelId = _this.channels[j].channelname;
                    }
                }
            }
        });
    };
    MemberComponent.prototype.ngOnInit = function () {
        this.getMembersInit();
    };
    MemberComponent.prototype.onSelect = function (memid) {
        this.memid = memid;
        this.getMembers(memid - 1);
    };
    MemberComponent.prototype.gotoDetail = function (memberid) {
        this.selectid = memberid;
        this.router.navigate(['/memberdetail', this.selectid]);
    };
    MemberComponent.prototype.goUpdate = function (memberid) {
        this.router.navigate(['/memberupdate', memberid]);
    };
    MemberComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'member',
            templateUrl: './member.component.html',
            styleUrls: ['./member.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, member_service_1.MemberService, router_1.Router, channel_service_1.ChannelService])
    ], MemberComponent);
    return MemberComponent;
}());
exports.MemberComponent = MemberComponent;
//# sourceMappingURL=member.component.js.map