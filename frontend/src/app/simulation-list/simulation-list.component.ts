import { Component, OnInit } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { SIMULATIONS } from '../simulation-element/mock-simulation';

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

  public simulations = SIMULATIONS

  public faBin = faTrashAlt 

  constructor() {
    
  }

  ngOnInit(): void {
  }

}
