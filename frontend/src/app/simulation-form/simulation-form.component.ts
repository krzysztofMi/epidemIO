import { NullTemplateVisitor } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Simulation } from '../simulation-element/simulation';
import { SimulationService } from '../simulation.service';

@Component({
  selector: 'app-simulation-form',
  templateUrl: './simulation-form.component.html',
  styleUrls: ['./simulation-form.component.css']
})
export class SimulationFormComponent implements OnInit {

  public simulation: Simulation = {
    id: 0,
    name: "",
    populationSize: 0,
    infected: 0,
    infectionRate: 0,
    mortalityRate: 0,
    dayUntilDeath: 0,
    dayUntilRecovery: 0,
    simulationDays: 0
  }

  constructor(private simulationService: SimulationService, private router: Router) {}

  ngOnInit(): void {
  }

  public onSubmit() {
    this.simulationService.save(this.simulation)
        .subscribe(data=>{
          this.simulation = data
          this.router.navigate(["simulation/", this.simulation.id])
        })
  }
}
