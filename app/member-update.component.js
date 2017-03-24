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
var member_service_1 = require('./member.service');
var MemberUpdateComponent = (function () {
    function MemberUpdateComponent(location, route, memberService) {
        this.location = location;
        this.route = route;
        this.memberService = memberService;
    }
    MemberUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.memberService.getMember(params['id']); })
            .subscribe(function (member) { _this.member = member; });
    };
    MemberUpdateComponent.prototype.goBack = function () {
        this.location.back();
    };
    MemberUpdateComponent.prototype.update = function () {
        var _this = this;
        this.memberService.update(this.member)
            .then(function () { return _this.goBack(); });
    };
    MemberUpdateComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'memberinsert',
            templateUrl: './member-update.component.html',
            styleUrls: ['./member-update.component.css']
        }), 
        __metadata('design:paramtypes', [common_1.Location, router_1.ActivatedRoute, member_service_1.MemberService])
    ], MemberUpdateComponent);
    return MemberUpdateComponent;
}());
exports.MemberUpdateComponent = MemberUpdateComponent;
//# sourceMappingURL=member-update.component.js.map