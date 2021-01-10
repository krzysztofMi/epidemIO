import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { Simulation } from '../simulation-element/simulation';
import { SimulationService } from '../simulation.service';

@Component({
  selector: 'app-simulation-list',
  templateUrl: './simulation-list.component.html',
  styleUrls: ['./simulation-list.component.css']
})
export class SimulationListComponent implements OnInit {

  public listHeaders: string[] = [
    'Nazwa', 
    'Wielkość populacji', 
    'Początkowa liczba chorych',
    'Zarażeni przez jedną osobę',
    'Wskaźnik śmiertelności',
    'Ilość dni do wyzdrowienia',
    'Ilość dni do śmierci',
    'Czas symulacji w dniach']

  public simulations: Simulation[] = []

  public faBin = faTrashAlt 
  private bin: Boolean = false;

  constructor(private simulationService: SimulationService, private router: Router) {
  
  }

  ngOnInit(): void {
    this.simulationService.getAll()
        .subscribe(data => this.simulations = data)
  }

  delete(item: Simulation) {
    this.simulationService.delete(item.id).subscribe( data => 
      this.simulations.splice(item.id-1, 1)
    )
  }

  changeRow(event: any) {
    let childrens = event.target.children
    for (let child of childrens) {
        child.classList.toggle("bg-secondary")
    }
  }

  changeBin(event: any) {
    event.target.classList.toggle("bg-danger")
  }

  toDetails(simulation: Simulation) {
    this.router.navigate(["simulation", simulation.id])
  }

  newSimulation() {
    this.router.navigate(["simulation"])
  }
}
