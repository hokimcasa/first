import { Component,OnInit } from '@angular/core';
import { ChartComponent }from '../chart.component';

@Component({
  moduleId: module.id,
  selector: 'googlechart',
  templateUrl: './googlechart.component.html'
})

export class GoogleChartComponent extends ChartComponent implements OnInit {
    
  private options:any;
  private data:any;
  private chart:any;

  //改寫GoogleChartComponent裡的drawGraph
  drawGraph(){
    console.log("DrawGraph Evolution...");  
    // 所要顯示的資料

    
    this.data = this.createDataTable([
      ['Evolution', '會員人數'],
      ['通化街夜市', 4],
      ['奇怪網路商城', 3],
      ['某山頭小農', 2],
      ['奇幻網路遊戲', 3]
    ]);
    //給予的設定
    this.options = {'title':'通路會員人數',
                       'width':550,
                       'height':400};
    //依所呼叫的函數決定所畫的圖表類型，依傳入的參數決定土俵所顯示的地方。
    this.chart = this.createBarChart(document.getElementById('chart1'));
    this.chart.draw(this.data, this.options);
  }
    
    googlechartInit():void{
        this.drawGraph();
    }

    ngOnInit(){
        this.googlechartInit();
    }
}
