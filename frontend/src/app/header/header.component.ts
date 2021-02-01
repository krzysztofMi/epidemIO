import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public name: string = ""

  constructor(public navbarService: NavbarService) { 
  
  }

  ngOnInit(): void {
  }

}
