import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'minuteToHours'
})
export class MinutesToHoursPipe implements PipeTransform {
    transform(value: number): string {
        if (isNaN(value) || value === 0) {
            return '';
        }
        if (value < 0) {
            value = -value;
        }
        if(value > 0 && value/60 < 1) {
            return value + ' Minutes';
        } 
        if (+(value/60).toFixed() === 1) {
            return (value/60).toFixed() + ' Hour ' + value%60 + ' Minutes';
        }
        return (value/60).toFixed() + ' Hours ' + value%60 + ' Minutes';
    }
}