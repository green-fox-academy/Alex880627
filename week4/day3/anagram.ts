'use strict';

export function anagram(sent1:string,sent2:string){
return sent1.toLowerCase().replace(/ /g,'').split('').sort().join() === 
sent2.toLowerCase().replace(/ /g,'').split('').sort().join() 
 ? true:false; 
}



