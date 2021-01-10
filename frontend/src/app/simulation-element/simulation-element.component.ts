import { Component, OnInit, Input } from '@angular/core';
import { Simulation } from './simulation';

@Component({
  selector: 'app-simulation-element',
  templateUrl: './simulation-element.component.html',
  styleUrls: ['./simulation-element.component.css']
})
export class SimulationElementComponent implements OnInit {
  @Input() simulation: Simulation | null  

  constructor(
  ) {
    this.simulation = null
  }

  ngOnInit(): void {
  }

}
