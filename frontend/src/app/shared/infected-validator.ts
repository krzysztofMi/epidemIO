import { AbstractControl } from "@angular/forms";

export function infectedGreatherThanPopulationsValidator(control: AbstractControl): {[key: string]: boolean} | null {
    const populationSize = control.get('populationSize')
    const infected = control.get('infected')
    if(populationSize?.pristine || infected?.pristine) {
        return null
    }
    return populationSize?.value < infected?.value ?
    { 'populationLessThanInfected': true} : null
}