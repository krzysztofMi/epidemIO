import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulationElementComponent } from './simulation-element.component';

describe('SimulationElementComponent', () => {
  let component: SimulationElementComponent;
  let fixture: ComponentFixture<SimulationElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulationElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulationElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
