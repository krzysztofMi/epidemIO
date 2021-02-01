import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  isSimulation: boolean = false
  simulationId = 0
  constructor() { }
  public hide() { this.isSimulation = false }
  public show() { this.isSimulation = true }
  public getSimulationId(): number { return this.simulationId }
}
