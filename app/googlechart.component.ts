import { Component,OnInit } from '@angular/core';
import { GoogleChartComponent }from './chart.component';

@Component({
  moduleId: module.id,
  selector: 'googlechart',
  templateUrl: './googlechart.component.html'
})

export class GoogleChatComponent extends GoogleChartComponent implements OnInit {
    
  private options:any;
  private data:any;
  private chart:any;

  //改寫GoogleChartComponent裡的drawGraph
  drawGraph(){
    console.log("DrawGraph Evolution...");  
    // 所要顯示的資料
    this.data = this.createDataTable([
      ['Evolution', 'Imports', 'Exports'],
      ['A', 8695000, 6422800],
      ['B', 3792000, 3694000],
      ['C', 8175000, 800800]
    ]);
    //給予的設定
    this.options = {'title':'How Much Pizza I Ate Last Night',
                       'width':400,
                       'height':300};
    //依所呼叫的函數決定所畫的圖表類型，依傳入的參數決定土俵所顯示的地方。
    this.chart = this.createPieChart(document.getElementById('chart1'));
    this.chart.draw(this.data, this.options);
  }
    
    googlechartInit():void{
        this.drawGraph();
    }

    ngOnInit(){
        this.googlechartInit();
    }
}
