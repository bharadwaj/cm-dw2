import {Pipe, PipeTransform} from '@angular/core';
/*
 * Split String by Comma and return the index
 * Takes an index argument and outputs the value the string.
 * Usage:
 *   0 | splitStringIdx:string_with_commas
 * Example:
 *   {{ 0 |  splitStringIdx:"asdf,jkll,hhgj"}}
 *   outputs: asdf
 */
@Pipe({name: 'splitStringIdx'})
export class SplitStringIndexPipe implements PipeTransform {
    transform(value:number, str:string):string {
        var partsOfStr = str.split(',');
        return partsOfStr[value];
    }
}