let colors=["red","blue"]
let a =document.createElement("span")
let x= document.querySelector("h1").innerText
document.querySelector("h1").innerText=x.slice(0,15)
a.append(x.slice(-4))

document.querySelector("h1").appendChild(a)



function handle() {
 let i=0;
    setInterval(()=>{
        if(i%2 == 0){
            a.style.color=colors[0]
            i=i+1
        }
        else{
            a.style.color=colors[1]
            i=i+1
        }
   
 },3000)   
}
window.onload=handle

let n=document.querySelectorAll("li")
for(let i=0;i<n.length;i++){
    if(i==0 || i==1 || i==2){
       
        n[i].style.backgroundColor="green"
    }
    if(i==3|| i==4){
        n[i].style.backgroundColor="yellow"
    }
    if(i==5 || i==6){
        n[i].style.backgroundColor="red"
    }
   
    
}
let i=0;
window.onload=setInterval(()=>{

   
    const date=new Date();
    const x=document.querySelector(".date")
    x.innerHTML=date
    if(i%2 == 0){
        x.style.backgroundColor=colors[0]
        i=i+1
    }
    else{
        x.style.backgroundColor=colors[1]
        i=i+1
    }

},1000)

var arr=[1,2,3,4]
var arr2=arr.map((a)=>{return a*2})
console.log(arr.indexOf(2,0,3))