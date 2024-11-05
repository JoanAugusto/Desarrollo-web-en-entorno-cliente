'use strict'

function truncate (str,maxlength){
    let countStr=str.length-1;
    console.log(countStr);

    if (countStr > maxlength){
        let truncStr=str.slice(0,maxlength);
        let newStr=truncStr+"...";
        console.log (newStr);
    }else if(countStr<=maxlength){
        console.log(str);
    }
}
truncate("lorem fdwef wfwfe fwefw ",25);