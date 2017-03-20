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

  drawGraph(){
    console.log("DrawGraph Evolution...");  
    this.data = this.createDataTable([
      ['Evolution', 'Imports', 'Exports'],
      ['A', 8695000, 6422800],
      ['B', 3792000, 3694000],
      ['C', 8175000, 800800]
    ]);

    // this.options = {
    //   title: 'Evolution, 2014',
    //   chartArea: {width: '50%'},
    //   hAxis: {
    //     title: 'Value in USD',
    //     minValue: 500
    //   },
    //   vAxis: {
    //     title: 'Members'
    //   }
    // };

    this.options = {'title':'How Much Pizza I Ate Last Night',
                       'width':400,
                       'height':300};

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
