import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js'
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  
  public chartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  }

  public chartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012']
  public chartType: ChartType = 'line'
  public chartLegend = true

  public chartData = [
    {data: [12, 59, 31, 80, 32, 95, 100], label: 'Series A'},
    {data: [10, 20, 30, 25, 30, 80, 10], label: 'Series B'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
