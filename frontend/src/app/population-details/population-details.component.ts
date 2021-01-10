import { Component, OnInit } from '@angular/core';
import { Population } from '../population-details/population';
import { faSmile, faSadCry, faHeart, faHospital, faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-population-details',
  templateUrl: './population-details.component.html',
  styleUrls: ['./population-details.component.css']
})
export class PopulationDetailsComponent implements OnInit {

  public population: Population = {
    day: 1,
    death: 2,
    health: 3,
    infected: 5,
    recovered: 20
  }

  public faIcons = [faHospital, faSmile, faSadCry, faHeart, faArrowAltCircleLeft, faArrowAltCircleRight] 
  constructor() { }

  ngOnInit(): void {
  }

}
