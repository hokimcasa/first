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
var transaction_service_1 = require('./transaction.service');
var TransactionBadyComponent = (function () {
    function TransactionBadyComponent(transactionService) {
        this.transactionService = transactionService;
    }
    TransactionBadyComponent.prototype.getTransactionDatas = function () {
        var _this = this;
        this.transactionService.getTransactions().then(function (transactionDatas) {
            _this.transactionDatas = transactionDatas;
        });
    };
    TransactionBadyComponent.prototype.ngOnInit = function () {
        this.getTransactionDatas();
    };
    TransactionBadyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'transaction-bady',
            templateUrl: './transaction-bady.component.html',
            styleUrls: ['./transaction-bady.component.css'],
            providers: [transaction_service_1.TransactionService]
        }), 
        __metadata('design:paramtypes', [transaction_service_1.TransactionService])
    ], TransactionBadyComponent);
    return TransactionBadyComponent;
}());
exports.TransactionBadyComponent = TransactionBadyComponent;
//# sourceMappingURL=transaction-bady.component.js.map