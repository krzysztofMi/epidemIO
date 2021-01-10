import { Identifiers } from "@angular/compiler";

export interface Simulation {
    id: number
    name: string
    populationSize: number
    infected: number
    infectionRate: number
    mortalityRate: number
    dayUntilRecovery: number
    dayUntilDeath: number
    simulationDays: number
}
