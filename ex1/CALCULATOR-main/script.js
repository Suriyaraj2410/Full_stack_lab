var input = document.getElementById("inputoutput");


console.log(input)
function display(a) {
    if ((input.value).startsWith("0")) {
        input.value = a;

    } else {
        input.value += a;
    }
    if(input.value[-1]=="+"){
        console.log("found")
        input.value[-1]==""
    }
   

}
function calculate() {

    try {
        input.value = eval(input.value)
    }
    catch {
        input.value = "Error"
    }
}
function clearInput() {
    input.value = ""
}
function del() {
    input.value = input.value.slice(0, -1)
}