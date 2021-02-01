import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SimulationElementComponent } from './simulation-element/simulation-element.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DetailLabelComponent } from './detail-label/detail-label.component';
import { ChartComponent } from './chart/chart.component';
import { PopulationDetailsComponent } from './population-details/population-details.component';
import { SimulationService } from './simulation.service';
import { PopulationService } from './population.service';
import { NavbarService } from './navbar.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingComponents,
    SimulationElementComponent,
    FooterComponent,
    DetailLabelComponent,
    ChartComponent,
    PopulationDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    FontAwesomeModule,
    ChartsModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [SimulationService, PopulationService, NavbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
