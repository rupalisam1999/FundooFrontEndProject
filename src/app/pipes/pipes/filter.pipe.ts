import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
//   item:any

 transform( items:any ,args?: any ) {
 
//   if (items && items.length){
//     return items.filter((item: { title: string; }) =>{
//         if (titleSearch && item.title.toLowerCase().indexOf(titleSearch.toLowerCase()) === -1){
//             return false;
//         }
//         return true;
//    })
// }
// else{
//     return items;
// }
// }
console.log(args);
if(args=="default message" ){
  console.log("inside if in pipe" ,args);
  return items
}else{
  console.log("inside else in pipe" ,args);
  args=args.toLocaleLowerCase();
}


console.log("value in pipe",items);
console.log("argument", args, typeof args);

return items.filter((note:any) =>{
  return note.title.toLocaleLowerCase().includes(args) | note.description.toLocaleLowerCase().includes(args);
  
})
}
 
 }
