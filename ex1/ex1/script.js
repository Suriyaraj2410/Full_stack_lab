function isPhone(){
const number=document.getElementById("phone_number").value
const re=/\(?\d{3}\)?[ -]?\d{3}[ -]?\d{4}/g
if (re.test(number)) {
    if (number.replace(/[() -]/g, "").length !=10) {
        alert("only10 digit")
    } else {
     alert("vaalid")
    }
  }else{
  alert("invalid")
  }
}