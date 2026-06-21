
console.log("SCRIPT LOADED")
let accounts =
JSON.parse(
    sessionStorage.getItem("accounts")
) || []
var nameinput = document.getElementById("name-input")
var ageinput = document.getElementById("age-input")
var phoneinput = document.getElementById("phone-input")
var addressinput = document.getElementById("address-input")
var depostinput = document.getElementById("deposit-input")
var accountNumberDisplay = document.getElementById("account-number-display")
var popup = document.getElementById("create-account-popup") 
var accountnumberinput = document.getElementById("account-number-input")
function createAccount(event)
{
    event.preventDefault()
    if(nameinput.value=="" || ageinput.value=="" || phoneinput.value=="" ||addressinput.value=="" ||depostinput.value=="")
    {
        alert("Please fill all the feilds!!!")
        return
    }
    if(Number(depostinput.value)<1000)
    {
        alert("Minimum deposit amount should be 1000!!!")
        return
    }
    
        let accountnumber = Math.floor(Math.random()*90000)+10000
        
    
    let account =
    {
        accountno : accountnumber,
        name : nameinput.value,
        phone : phoneinput.value,
        address : addressinput.value,
        age : ageinput.value,
        balance : Number(depostinput.value)
    }
    
    accounts.push(account)
    sessionStorage.setItem(
    "accounts",
    JSON.stringify(accounts)
)
   console.log(sessionStorage.getItem("accounts"))
    accountNumberDisplay.textContent = "Your Account Number : " +accountnumber
    popup.style.display="block"
}
function verifyAccount(event)
{
    event.preventDefault()
    console.log(accounts)
    for(let i=0; i<accounts.length; i++)
    {
        if(
            accounts[i].accountno ==
            Number(accountnumberinput.value)
        )
        {
            alert("Account Verified Successfully")
            return
        }
    }

    alert("Invalid Account Number")
}
