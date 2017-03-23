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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var myhead_component_1 = require('./myhead.component');
var mybady_component_1 = require('./mybady.component');
var myfunction_component_1 = require('./myfunction.component ');
var mycontent_component_1 = require('./mycontent.component');
var member_component_1 = require('./member.component');
var member_insert_component_1 = require('./member-insert.component');
var member_detail_component_1 = require('./member-detail.component');
var transaction_component_1 = require('./transaction.component');
var transaction_head_component_1 = require('./transaction-head.component');
var transaction_bady_component_1 = require('./transaction-bady.component');
var googlechart_component_1 = require('./googlechart.component');
var member_service_1 = require('./member.service');
var channel_service_1 = require('./channel.service');
var member_update_component_1 = require('./member-update.component');
var app_routing_module_1 = require('./app-routing.module');
var angular_in_memory_web_api_1 = require('angular-in-memory-web-api');
var InMemoryDataService_1 = require('./InMemoryDataService');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                http_1.HttpModule,
                angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(InMemoryDataService_1.InMemoryDataService),
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule],
            declarations: [
                app_component_1.AppComponent,
                myhead_component_1.MyHeadComponent,
                mybady_component_1.MyBadyComponent,
                myfunction_component_1.MyFunctionComponent,
                mycontent_component_1.MyContentComponent,
                member_component_1.MemberComponent,
                member_insert_component_1.MemberInsertComponent,
                transaction_component_1.TransactionComponent,
                transaction_head_component_1.TransactionHeadComponent,
                transaction_bady_component_1.TransactionBadyComponent,
                googlechart_component_1.GoogleChatComponent,
                member_detail_component_1.MemberDetailComponent,
                member_update_component_1.MemberUpdateComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [member_service_1.MemberService,
                channel_service_1.ChannelService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map