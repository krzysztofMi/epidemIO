
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarService } from '../navbar.service';
import { infectedGreatherThanPopulationsValidator } from '../shared/infected-validator';
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
    populationSize: "",
    infected: "",
    infectionRate: "",
    mortalityRate: "",
    daysUntilDeath: "",
    daysUntilRecovery: "",
    simulationDays: ""
  }

  simulationForm = this.fb.group({
    name: [this.simulation.name, [Validators.required, Validators.maxLength(30)]],
    populationSize: [this.simulation.populationSize, [Validators.required, Validators.min(0)]],
    infected: [this.simulation.infected, [Validators.required, Validators.min(0)]],
    infectionRate: [this.simulation.infectionRate, [Validators.required, Validators.min(0)]],
    mortalityRate: [this.simulation.mortalityRate, [Validators.required, Validators.min(0), Validators.max(1)]],
    daysUntilDeath: [this.simulation.daysUntilDeath, [Validators.required, Validators.min(0)]],
    daysUntilRecovery: [this.simulation.daysUntilRecovery, [Validators.required, Validators.min(0)]],
    simulationDays: [this.simulation.simulationDays, [Validators.required, Validators.min(0)]]
  }, {validator: infectedGreatherThanPopulationsValidator})

  id: number = 0

  constructor(
    private simulationService: SimulationService, 
    private router: Router,
    private route: ActivatedRoute,
    private navbarService: NavbarService,
    private fb: FormBuilder) {
      let id = route.snapshot.paramMap.get('id')
      this.id = id ? parseInt(id) : 0
      if(this.id != 0 ) {
        navbarService.show()
      }
    }

  ngOnInit(): void {
    if(this.id!=0) {
      this.simulationService.get(this.id).subscribe(
        data=>this.simulationForm.setValue({
          name: data.name,
          populationSize: data.populationSize,
          infected: data.infected,
          infectionRate: data.infectionRate,
          mortalityRate: data.mortalityRate,
          daysUntilDeath: data.daysUntilDeath,
          daysUntilRecovery: data.daysUntilRecovery,
          simulationDays: data.simulationDays
        })
      )
    } 
  }

  public onSubmit() {
    this.simulationService.save(this.simulationForm.value)
        .subscribe(data=>{
          this.simulation = data
          this.router.navigate(["simulation/", this.simulation.id])
        })
  }

  get name(){
    return this.simulationForm.controls.name;
  }

  get populationSize(){
    return this.simulationForm.controls.populationSize;
  }

  get infected(){
    return this.simulationForm.controls.infected;
  }

  get infectionRate() {
    return this.simulationForm.controls.infectionRate
  }

  get mortalityRate() {
    return this.simulationForm.controls.mortalityRate
  }

  get daysUntilDeath() {
    return this.simulationForm.controls.daysUntilDeath
  }

  get daysUntilRecovery() {
    return this.simulationForm.controls.daysUntilRecovery
  }

  get simulationDays() {
    return this.simulationForm.controls.simulationDays
  }
}
