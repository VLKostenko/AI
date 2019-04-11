import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'filterPipe',
  pure: false
})

export class FilterPipe implements PipeTransform {
  transform(value: any, searchText: any): any {

    // Alternative Way //

    // if ( !items ) {
    //   return [];
    // }

    // if ( !term ) {
    //   return items;
    // }

    // term = term.toLowerCase();

    // return items.filter( it => {
    //   return it[name].toLowerCase().includes(term);
    // });

    if (!searchText) {
      return value;
    }
    return value.filter((data) => this.matchValue(data, searchText));

  }
  matchValue(data, value) {
    return Object.keys(data).map((key) => {
      return new RegExp(value, 'gi').test(data[key]);
    }).some(result => result);
  }

}
