import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Population } from './population-details/population';
import { ChartData } from './chart/chart-data';

@Injectable({
  providedIn: 'root'
})
export class PopulationService {

  private url: String = "//localhost:8080/";
  
  constructor(private http: HttpClient) { }

  getPopulation(id: number, day: number) {
    return this.http.get<Population>(this.url + "simulation/" + id + "/population", {
      params: new HttpParams().set("day", day.toString())
    });
  }

  getChartData(id: number, type: ChartData) {
    return this.http.get<Population>(this.url + "simulation/" + id + "/population/data", {
      params: new HttpParams().set("type", type.toString())
    });
  }
}
