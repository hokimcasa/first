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
var common_1 = require('@angular/common');
var member_service_1 = require('./member.service');
var ChannelMemberManagerComponent = (function () {
    function ChannelMemberManagerComponent(location, route, router, memberService) {
        this.location = location;
        this.route = route;
        this.router = router;
        this.memberService = memberService;
        this.memid = 0;
        this.members = [];
    }
    ChannelMemberManagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.getChannelMember(params['id']);
        });
    };
    ChannelMemberManagerComponent.prototype.getChannelMember = function (channel) {
        var _this = this;
        this.memberService.getMembers().then(function (members) {
            for (var i = 0; i < members.length; i++) {
                if (members[i].channelId == channel) {
                    _this.members.push(members[i]);
                    console.log("applymembers[" + i + "]");
                }
            }
        });
    };
    ChannelMemberManagerComponent.prototype.goBack = function () {
        this.location.back();
    };
    ChannelMemberManagerComponent.prototype.gotoDetail = function (channelid) {
        this.selectid = channelid;
        this.router.navigate(['/memberdetail', this.selectid]);
    };
    ChannelMemberManagerComponent.prototype.delete = function (member) {
        var _this = this;
        member.channelId = '';
        this.memberService.update(member)
            .then(function () { return _this.goBack(); });
    };
    ChannelMemberManagerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'channelmembermanager',
            templateUrl: './channel-membermanager.component.html',
            styleUrls: ['./channel-membermanager.component.css']
        }), 
        __metadata('design:paramtypes', [common_1.Location, router_1.ActivatedRoute, router_1.Router, member_service_1.MemberService])
    ], ChannelMemberManagerComponent);
    return ChannelMemberManagerComponent;
}());
exports.ChannelMemberManagerComponent = ChannelMemberManagerComponent;
//# sourceMappingURL=channel-membermanager.component.js.map