let accounts =
JSON.parse(
    sessionStorage.getItem("accounts")
) || []
let currentAccount =
JSON.parse(sessionStorage.getItem("currentAccount"))

let welcomeUser =
document.getElementById("welcome-user")

if(currentAccount && welcomeUser)
{
    welcomeUser.textContent =
    "Welcome " + currentAccount.name
}
var nameinput = document.getElementById("name-input")
var ageinput = document.getElementById("age-input")
var phoneinput = document.getElementById("phone-input")
var addressinput = document.getElementById("address-input")
var depostinput = document.getElementById("deposit-input")
var accountNumberDisplay = document.getElementById("account-number-display")
var popup = document.getElementById("create-account-popup") 
var accountnumberinput = document.getElementById("account-number-input")
var balanceDisplay = document.getElementById("balance-display")
if(balanceDisplay && currentAccount)
{
    balanceDisplay.textContent =
    "Current Balance : ₹" + currentAccount.balance
}
var depositAmountInput =
document.getElementById("depsosit-amount-input")

var depositBtn =
document.getElementById("deposit-btn")
if(depositBtn)
{
    depositBtn.onclick = function()
    {
        currentAccount.balance +=
        Number(depositAmountInput.value)

        sessionStorage.setItem(
            "currentAccount",
            JSON.stringify(currentAccount)
        )

        alert("Deposit Successful")
        depositAmountInput.value=""
    }
}
var withdrawAmountInput =
document.getElementById("withdraw-amount-input")

var withdrawBtn =
document.getElementById("withdraw-btn")
if(withdrawBtn)
{
    withdrawBtn.onclick = function()
    {
        let amount =
        Number(withdrawAmountInput.value)

        if(amount > currentAccount.balance)
        {
            alert("Insufficient Balance")
            return
        }

        currentAccount.balance -= amount

        sessionStorage.setItem(
            "currentAccount",
            JSON.stringify(currentAccount)
        )

        alert("Withdrawal Successful")
        withdrawAmountInput.value=""
    }
}
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
            sessionStorage.setItem(
            "currentAccount",
            JSON.stringify(accounts[i])
)

            window.location.href = "operations.html"
            return
        }
    }
    alert("Invalid Account Number")
}
