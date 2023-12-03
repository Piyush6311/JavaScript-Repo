const accountId =144553
let accountEmail = "piyush@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
var sccount;

// accountId= 2 //not allowed
/*
Prefer not to use var because of issue in Block scope and Functional scope 
*/
console.log(accountId);
accountEmail = "hc@hc.accountEmail"
accountCity = "Banguluru"
accountPassword = "56468"
console.table([accountId, accountEmail, accountPassword, accountCity,accountState,sccount])



