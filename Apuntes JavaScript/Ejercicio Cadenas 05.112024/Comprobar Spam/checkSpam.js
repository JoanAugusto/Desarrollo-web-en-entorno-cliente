'use strict'

function checkSpam(str){
    let parseLowStr= str.toLowerCase();
    
    // console.log(comparedCharacter);
    console.log( (parseLowStr.includes("viagra")? true :
            (parseLowStr.includes("xxx")? true:false)));
}
checkSpam("buy VIAgra XXX");