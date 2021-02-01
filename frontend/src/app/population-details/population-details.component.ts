import { Component, Input, OnInit } from '@angular/core';
import { Population } from '../population-details/population';
import { faSmile, faSadCry, faHeart, faHospital, faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'
import { PopulationService } from '../population.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-population-details',
  templateUrl: './population-details.component.html',
  styleUrls: ['./population-details.component.css']
})
export class PopulationDetailsComponent implements OnInit {

  simulationId: number = 0
  public day: number = 0

  public population: Population = {
    death: "",
    recovered: "",
    infected: "",
    healthy: ""
  }
  public faIcons = [faHospital, faSmile, faSadCry, faHeart, faArrowAltCircleLeft, faArrowAltCircleRight] 
  constructor(private populationService: PopulationService,
    private route: ActivatedRoute, private router: Router) {
      let id = route.snapshot.paramMap.get("id")
      if(id) {
        this.simulationId = parseInt(id)
      }
    }

  ngOnInit(): void {
    this.getPopulation(this.day).subscribe(
      data=>this.population = data
    )
  }

  getPopulation(day: number) {
    return this.populationService.getPopulation(this.simulationId, day)
  }

  dayLess() {
    if(this.day == 0) return
    this.getPopulation(this.day-1).subscribe(
      data=>{
        this.population=data
        this.day-=1
      }
    )
  }

  dayMore() {
    this.getPopulation(this.day+1).subscribe(
      data=>{
        this.population=data
        this.day+=1
      },
      error=>{}      
    )
  }

}
