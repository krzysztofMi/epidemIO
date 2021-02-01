import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Simulation } from './simulation-element/simulation'

@Injectable({
  providedIn: 'root'
})
export class SimulationService {

  private url: String = "//localhost:8080/";

  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get<Simulation[]>(this.url + "simulation")
  }

  public get(id: number) {
    return this.http.get<Simulation>(this.url + "simulation/" + id)
  }

  public save(simulation: Simulation) {
    return this.http.post<any>(this.url + "simulation", simulation)
  }

  public delete(id: number) {
    return this.http.delete<any>(this.url + "simulation/" + id)
  }
}
