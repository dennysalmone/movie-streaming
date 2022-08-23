import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'minuteToHours'
})
export class MinutesToHoursPipe implements PipeTransform {
    transform(value: number): string {
        let result = '';
        if (value > 60) {
            if (value > 120) {
                result = Math.floor((value/60)) + ' Hours ';
            } else {
                result = Math.floor((value/60)) + ' Hour ';
            }
        }
        if (value % 60) {
            if (value % 60 === 1) {
                result = result + (value % 60) + ' Minute';
            } else {
                result = result + (value % 60) + ' Minutes';
            }
        }
        return result;
    }
} 