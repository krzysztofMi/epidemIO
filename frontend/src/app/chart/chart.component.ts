import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartType } from 'chart.js'
import { Label } from 'ng2-charts';
import { PopulationService } from '../population.service';
import { SimulationService } from '../simulation.service';
import { ChartData } from './chart-data';

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

  private simulationId: number = 0
  public chartLabels: Label[]  = []
  public chartType: ChartType = 'line'
  public chartLegend = true

  public chartData: any= []

  constructor(
    private populationService: PopulationService,
    private simulationService: SimulationService,
    private route: ActivatedRoute) { 
    let id = route.snapshot.paramMap.get("id")
    if(id) {
      this.simulationId = parseInt(id)
    }
  }

  ngOnInit(): void {
    this.simulationService.get(this.simulationId).subscribe(
      data=>{this.chartLabels = Array
        .from(Array(data.simulationDays).keys())
        .map(it=>it.toString())
      }
    )
    this.populationService.getChartData(this.simulationId, ChartData.Active).subscribe(
      data=>this.chartData.push({"data": data, 'label': "Aktywne przypadki"})
    )
    this.populationService.getChartData(this.simulationId, ChartData.All).subscribe(
      data=>this.chartData.push({"data": data, 'label': "Wszystkie przypadki"})
    )
    this.populationService.getChartData(this.simulationId, ChartData.Death).subscribe(
      data=>this.chartData.push({"data": data, 'label': "Liczba zgonów"})
    )
    this.populationService.getChartData(this.simulationId, ChartData.Recovered).subscribe(
      data=>this.chartData.push({"data": data, 'label': "Ozdrowieńcy"})
    )
    this.populationService.getChartData(this.simulationId, ChartData.Recovered).subscribe(
      data=>this.chartData.push({"data": data, 'label': "Ozdrowieńcy"})
    )
    this.populationService.getChartData(this.simulationId, ChartData.Health).subscribe(
      data=>this.chartData.push({"data": data, 'label': "Zdrowi"})
    )
  }

}
