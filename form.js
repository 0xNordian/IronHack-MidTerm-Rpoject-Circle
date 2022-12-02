const nombre = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("number");
const warning = document.getElementById("warning");
const bttn = document.getElementById("bttn");
const w = document.getElementById("warn")
const wemail = document.getElementById("wemail")

bttn.addEventListener("click",(e)=>{
  e.preventDefault()
  let warnings=""
  let valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
  let p=""
if(number.value.length != 9){
    warnings="Not valid"
    warning.innerHTML = warnings;
}
console.log(nombre.value)
 if (nombre.value == "ironhack"){
        warn="You cannot be Ironhack, because I am Ironhack."
        w.innerHTML = warn;
    }

if (!valid.test(email.value))
{
    p = "Not valid"
    wemail.innerHTML = p;

}
})

comsole
    s
