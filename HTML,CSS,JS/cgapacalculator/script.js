var external = document.getElementById("external")


function check(e) {
    console.log(e)
    if (e.target.value > 100) {
        prompt("enter the mark properly")
        e.target.value = ""
    }
}
const auto_weight = {
    1:' 60 - 40',
    2: '40 - 60'
}
const m_weight = {
    1: 70 
    , 2: 50,
    3: 80 
}
var weight = document.getElementById("weight")

function fix_mode() {
    var select = document.createElement("select")
    var selected = document.getElementById('selected')
    if (selected.value == "auto") {
        select.innerHTML = `<option>${auto_weight[1]} </option> <option>${auto_weight[2]} </option>`
    }
    else {
        select.innerHTML = `<option>${m_weight[1]} </option> <option>${m_weight[2]} </option> <option>${m_weight[3]} </option>`
    }

weight.appendChild(select)
 
}