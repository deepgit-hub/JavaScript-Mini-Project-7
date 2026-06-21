let accounts = []
var nameinput = document.getElementById("name-input")
var ageinput = document.getElementById("age-input")
var phoneinput = document.getElementById("phone-input")
var addressinput = document.getElementById("address-input")
var depostinput = document.getElementById("deposit-input")
function createAccount(event)
{
    event.preventDefault()
    if(nameinput.value=="" || ageinput.value=="" || phoneinput.value=="" ||addressinput.value=="" ||depostinput.value=="")
    {
        alert("Please fill all the feilds!!!")
        return
    }
    if(Number(depostinput.value<1000))
    {
        alert("Minimum deposit amount should be 1000!!!")
        return
    }
    else{
        let accountnumber = Math.floor(Math.random()*90000)+10000
        console.log(accountnumber)
    }
}
