const accountId = 144555
let accountEmail = "Rohit@google.com"
var accountPassword = "54321"
accountCity = "New delhi"
let accountState = "Delhi"

// accountId = 2 // not allowed


accountEmail = "R@hit.com"
accountPassword = "12345"
accountCity = "Bengaluru"
accountState = "Karnataka"
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

