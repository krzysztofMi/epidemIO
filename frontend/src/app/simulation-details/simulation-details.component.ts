import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavbarService } from '../navbar.service';
@Component({
  selector: 'app-simulation-details',
  templateUrl: './simulation-details.component.html',
  styleUrls: ['./simulation-details.component.css']
})
export class SimulationDetailsComponent implements OnInit {


  constructor(private navbarService: NavbarService, private route: ActivatedRoute) { 
    navbarService.show()
    let id = route.snapshot.paramMap.get("id")
    if(id) {
      navbarService.simulationId = parseInt(id)
    }
  }

  ngOnInit(): void {
  }

}
