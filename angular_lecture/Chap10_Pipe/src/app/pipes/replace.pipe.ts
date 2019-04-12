import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'replace' })
export class ReplacePipe implements PipeTransform {
    transform(data: (string | number), oldValue: (string | number), newValue: (string | number)): string {
        // if (typeof data.toString() !== ('string'||'number')
        //     || typeof oldValue.toString() !== ('string'||'number')
        //     || typeof newValue.toString() !== ('string'||'number')) {
        //     return data.toString();
        // } else {
        //     data = data.toString();
        //     oldValue = oldValue.toString();
        //     newValue = newValue.toString();

        //     return data.replace(oldValue, newValue);

        // }


        if (!data || !oldValue || !newValue) {
            return data.toString();
        } else {
            data = data.toString();
            oldValue = oldValue.toString();
            newValue = newValue.toString();

            return data.replace(oldValue, newValue);

        }

        // if(typeof data !== "string") return data;
        // if(typeof oldValue !== "string" || typeof newValue !== "string") return data;

        // return data.replace(oldValue, newValue);


    }
}