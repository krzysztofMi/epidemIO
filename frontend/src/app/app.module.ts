import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

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
    AppRoutingModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
