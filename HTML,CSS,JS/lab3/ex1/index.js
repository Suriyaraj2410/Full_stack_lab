let a=document.querySelector("p")
document.getElementById("5").innerHTML=a.innerHTML
// document.getElementById("5").innerHTML


let b=[]
b[0]=document.querySelector("#first").innerHTML
b[1]=document.querySelector("#SECOND").innerHTML
b[2]=document.querySelector("#third").innerHTML
b[3]=document.querySelector("#fourth").innerHTML

for (let i=0;i<4;i++){
    document.getElementById("6").append(b[i])  

}
let c=document.querySelectorAll("p")

let j=document.querySelectorAll(".para")
let arr=["red","black","blue","black","grey"]

for (let i=0;i<4;i++){
    j[i].style.color=arr[i+1]
}
for (let i=0;i<4;i++){
    if(i==0 || i==2)
        j[i].style.backgroundColor="red"
        else{
            j[i].style.backgroundColor="green"
        }
}

document.addEventListener("keypress",((event)=>{
    if(event.key=="x"){
        document.body.innerHTML=`<img src="https://th.bing.com/th/id/OIP.SmnQrozPVg1WdFThnnjqhwHaKQ?w=139&h=193&c=7&r=0&o=5&pid=1.7"></img>`
    }
}))


window.onload=alert("suriya")