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
var common_1 = require('@angular/common');
var channel_service_1 = require('./channel.service');
var MemberDetailComponent = (function () {
    function MemberDetailComponent(memberService, route, location, channelService, router) {
        this.memberService = memberService;
        this.route = route;
        this.location = location;
        this.channelService = channelService;
        this.router = router;
    }
    MemberDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.memberService.getMember(params['id']); })
            .subscribe(function (member) {
            _this.member = member;
            console.log(member.mobileNO);
            _this.channelService.getChannel(_this.member.channelId)
                .then(function (channel) {
                _this.channel = channel;
            });
        });
    };
    MemberDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    MemberDetailComponent.prototype.goUpdate = function (memberid) {
        this.router.navigate(['/memberupdate', memberid]);
    };
    MemberDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'memberdetail',
            templateUrl: './member-detail.component.html',
            styleUrls: ['./member-detail.component.css']
        }), 
        __metadata('design:paramtypes', [member_service_1.MemberService, router_1.ActivatedRoute, common_1.Location, channel_service_1.ChannelService, router_1.Router])
    ], MemberDetailComponent);
    return MemberDetailComponent;
}());
exports.MemberDetailComponent = MemberDetailComponent;
//# sourceMappingURL=member-detail.component.js.map