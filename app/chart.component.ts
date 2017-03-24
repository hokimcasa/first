import { Component, OnInit} from '@angular/core';
declare var google:any;
@Component({
  selector: 'chart'
})
export class GoogleChartComponent implements OnInit {
  private static googleLoaded:any;

  constructor(){
      console.log("Here is GoogleChartComponent")
  }

  getGoogle() {
      return google;
  }
  ngOnInit() {
    console.log('ngOnInit');
    if(!GoogleChartComponent.googleLoaded) {
        console.log(GoogleChartComponent.googleLoaded);
      GoogleChartComponent.googleLoaded = true;
      google.charts.load('current',  {packages: ['corechart', 'bar']});
      //google.charts.load(版本 ex:'current',  圖的種類 ex:{packages: ['corechart', 'bar']});
    }
    google.charts.setOnLoadCallback(() => this.drawGraph());
  }

  drawGraph(){
      
      console.log("DrawGraph base class!!!! ");
  }

  createBarChart(element:any):any {
      return new google.visualization.BarChart(element);
  }

  createPieChart(element:any):any {
      return new google.visualization.PieChart(element);
  }


  createDataTable(array:any[]):any {
      return google.visualization.arrayToDataTable(array);
  }
}