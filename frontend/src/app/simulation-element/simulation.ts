export interface Simulation {
    name: string
    popSize: number
    sickNumber: number
    R: number
    mortalityRate: number
    dayUntilRecovery: number
    dayUntilDead: number
    simulationDays: number
}