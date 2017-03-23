"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var chart_component_1 = require('./chart.component');
var GoogleChatComponent = (function (_super) {
    __extends(GoogleChatComponent, _super);
    function GoogleChatComponent() {
        _super.apply(this, arguments);
    }
    //改寫GoogleChartComponent裡的drawGraph
    GoogleChatComponent.prototype.drawGraph = function () {
        console.log("DrawGraph Evolution...");
        // 所要顯示的資料
        this.data = this.createDataTable([
            ['Evolution', 'Imports', 'Exports'],
            ['A', 8695000, 6422800],
            ['B', 3792000, 3694000],
            ['C', 8175000, 800800]
        ]);
        //給予的設定
        this.options = { 'title': 'How Much Pizza I Ate Last Night',
            'width': 400,
            'height': 300 };
        //依所呼叫的函數決定所畫的圖表類型，依傳入的參數決定土俵所顯示的地方。
        this.chart = this.createPieChart(document.getElementById('chart1'));
        this.chart.draw(this.data, this.options);
    };
    GoogleChatComponent.prototype.googlechartInit = function () {
        this.drawGraph();
    };
    GoogleChatComponent.prototype.ngOnInit = function () {
        this.googlechartInit();
    };
    GoogleChatComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'googlechart',
            templateUrl: './googlechart.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], GoogleChatComponent);
    return GoogleChatComponent;
}(chart_component_1.GoogleChartComponent));
exports.GoogleChatComponent = GoogleChatComponent;
//# sourceMappingURL=googlechart.component.js.map