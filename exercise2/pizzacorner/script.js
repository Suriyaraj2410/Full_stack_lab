const crust={
small:99,
medium:199,
large:399,
deeppan:20,
mushrooms:20,
olives:10,
fingernail:30,
spicybeef:20,
homedelivery:25
}
var bill=0;
var flag=1;
function small(){
bill+=crust.small
}
function medium(){
    bill +=crust.medium
}
function large(){
    bill +=crust.large
}
function total_bill(){
if(flag==1){
    document.getElementById("total").value=bill;
    flag=flag+1;
}
else{
    document.getElementById("total").value="";
}
}
function deeppan(){
    bill+=crust.deeppan
}
function mushrooms(){
    bill+=crust.mushrooms
}
function olives(){
    bill+=crust.olives
}
function fingernail(){
    bill+=crust.fingernail
}
function spicybeef(){
    bill+=crust.spicybeef
}
function homedelivery(){
    bill +=crust.homedelivery
}