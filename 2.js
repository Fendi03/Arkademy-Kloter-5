function usernameValidity(str){
    const rgx = /^[a-z._0-9]{8,12}$/;
    return rgx.test(str);
}
function passwordValidity(str){
    const rgx1 = /[A-Z]$/s;
    const rgx2 = /[a-z]$/s;
    const rgx3 = /[0-9]$/s;
    const rgx4 = /[~@#$%^&*!?|]$/s;
    let huruf1 = 0;
    let huruf2 = 0;
    let angka = 0;
    let simbol = 0;
    let arrStr = str.split('');
    for(i=0; i<=arrStr.length;i++){
        if(rgx1.test(arrStr[i])==true){
            huruf1+=1;
        }
        if(rgx2.test(arrStr[i])==true){
            huruf2+=1;
        }
        if(rgx3.test(arrStr[i])==true){
            angka+=1;
        }
        if(rgx4.test(arrStr[i])==true){
            simbol+=1;
        }
        
    }
    if(simbol>=1&&angka>=1){
        return true;
    }else{
        return false;
    }
}

console.log(usernameValidity('john.smith'));
console.log(usernameValidity('johnsmith26'));
console.log(usernameValidity('JOHNSmith'));
console.log(passwordValidity('j0hn5m!th'));