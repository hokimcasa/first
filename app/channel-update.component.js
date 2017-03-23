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
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var channel_service_1 = require('./channel.service');
var ChannelUpdateComponent = (function () {
    function ChannelUpdateComponent(location, route, channelService) {
        this.location = location;
        this.route = route;
        this.channelService = channelService;
    }
    ChannelUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.channelService.getChannel(params['id']); })
            .subscribe(function (channel) { _this.channel = channel; });
    };
    ChannelUpdateComponent.prototype.goBack = function () {
        this.location.back();
    };
    ChannelUpdateComponent.prototype.update = function () {
        var _this = this;
        this.channelService.update(this.channel)
            .then(function () { return _this.goBack(); });
    };
    ChannelUpdateComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'channelinsert',
            templateUrl: './channel-update.component.html',
            styleUrls: ['./channel-update.component.css']
        }), 
        __metadata('design:paramtypes', [common_1.Location, router_1.ActivatedRoute, channel_service_1.ChannelService])
    ], ChannelUpdateComponent);
    return ChannelUpdateComponent;
}());
exports.ChannelUpdateComponent = ChannelUpdateComponent;
//# sourceMappingURL=channel-update.component.js.map