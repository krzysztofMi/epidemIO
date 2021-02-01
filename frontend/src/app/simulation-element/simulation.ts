import { Identifiers } from "@angular/compiler";

export interface Simulation {
    id: number
    name: string
    populationSize: string
    infected: string
    infectionRate: string
    mortalityRate: string
    daysUntilRecovery: string
    daysUntilDeath: string
    simulationDays: string
}
