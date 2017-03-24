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
var router_1 = require('@angular/router');
var transaction_service_1 = require('./transaction.service');
var member_service_1 = require('./member.service');
var channel_service_1 = require('./channel.service');
var TransactionBadyComponent = (function () {
    function TransactionBadyComponent(transactionService, memberService, channelService, router) {
        this.transactionService = transactionService;
        this.memberService = memberService;
        this.channelService = channelService;
        this.router = router;
    }
    TransactionBadyComponent.prototype.getTransactionDatas = function () {
        var _this = this;
        this.transactionService.getTransactions().then(function (transactionDatas) {
            _this.transactionDatas = transactionDatas;
            var _loop_1 = function(i) {
                _this.memberService
                    .getMember(transactionDatas[i].memberid)
                    .then(function (member) {
                    _this.transactionDatas[i].memberid = member.name;
                    _this.channelService
                        .getChannel(member.channelId)
                        .then(function (channel) { return _this.transactionDatas[i].channelid = channel.channelname; });
                });
            };
            for (var i = 0; i < transactionDatas.length; i++) {
                _loop_1(i);
            }
        });
    };
    TransactionBadyComponent.prototype.ngOnInit = function () {
        this.getTransactionDatas();
    };
    TransactionBadyComponent.prototype.gotoDetail = function (transactionid) {
        this.router.navigate(['/transactiondetail', transactionid]);
    };
    TransactionBadyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'transaction-bady',
            templateUrl: './transaction-bady.component.html',
            styleUrls: ['./transaction-bady.component.css']
        }), 
        __metadata('design:paramtypes', [transaction_service_1.TransactionService, member_service_1.MemberService, channel_service_1.ChannelService, router_1.Router])
    ], TransactionBadyComponent);
    return TransactionBadyComponent;
}());
exports.TransactionBadyComponent = TransactionBadyComponent;
//# sourceMappingURL=transaction-bady.component.js.map