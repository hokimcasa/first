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
var channel_service_1 = require('./channel.service');
var ChannelComponent = (function () {
    function ChannelComponent(route, router, channelService) {
        this.route = route;
        this.router = router;
        this.channelService = channelService;
        this.memid = 0;
    }
    ChannelComponent.prototype.ngOnInit = function () {
        this.getChannel();
    };
    ChannelComponent.prototype.getChannel = function () {
        var _this = this;
        this.channelService.getChanneles().then(function (channels) { return _this.channels = channels; });
    };
    ChannelComponent.prototype.gotoDetail = function (channelid) {
        this.selectid = channelid;
        this.router.navigate(['/channeldetail', this.selectid]);
    };
    ChannelComponent.prototype.gotoMemberManager = function (channelid) {
        this.selectid = channelid;
        this.router.navigate(['/channel-membermanager', this.selectid]);
    };
    ChannelComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'channel',
            templateUrl: './channel.component.html',
            styleUrls: ['./channel.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, channel_service_1.ChannelService])
    ], ChannelComponent);
    return ChannelComponent;
}());
exports.ChannelComponent = ChannelComponent;
//# sourceMappingURL=channel.component.js.map