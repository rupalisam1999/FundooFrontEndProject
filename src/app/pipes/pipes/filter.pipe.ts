import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any,filteredSting:string) {
    if(value.length  ===0 || filteredSting===''){
      return value;
    }
 
    const childMsg=[];
    //const users=[];
    for(const note of value)
    {
      if(note.title.toLocaleLowerCase().includes(filteredSting) || note.description.toLocaleLowerCase().includes(filteredSting))
      {
       childMsg.push(note);
      
      }
    }
    return childMsg;
   }
 
 }
