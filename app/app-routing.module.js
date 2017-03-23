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
var member_component_1 = require('./member.component');
var member_insert_component_1 = require('./member-insert.component');
var transaction_component_1 = require('./transaction.component');
var googlechart_component_1 = require('./googlechart.component');
var member_detail_component_1 = require('./member-detail.component');
var member_update_component_1 = require('./member-update.component');
var channel_component_1 = require('./channel.component');
var channel_detail_component_1 = require('./channel-detail.component');
var channel_update_component_1 = require('./channel-update.component');
var channel_membermanager_component_1 = require('./channel-membermanager.component');
var routes = [
    { path: '', redirectTo: '/member', pathMatch: 'full' },
    { path: 'member', component: member_component_1.MemberComponent },
    { path: 'transaction', component: transaction_component_1.TransactionComponent },
    { path: 'member/:index', component: member_component_1.MemberComponent },
    { path: 'memberinsert', component: member_insert_component_1.MemberInsertComponent },
    { path: 'googlechart', component: googlechart_component_1.GoogleChatComponent },
    { path: 'memberdetail/:id', component: member_detail_component_1.MemberDetailComponent },
    { path: 'memberupdate/:id', component: member_update_component_1.MemberUpdateComponent },
    { path: 'channel', component: channel_component_1.ChannelComponent },
    { path: 'channeldetail/:id', component: channel_detail_component_1.ChannelDetailComponent },
    { path: 'channelupdate/:id', component: channel_update_component_1.ChannelUpdateComponent },
    { path: 'channel-membermanager/:id', component: channel_membermanager_component_1.ChannelMemberManagerComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map