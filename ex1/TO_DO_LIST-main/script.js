function handlesubmit() {
    const task=document.getElementById("tasklist").value
    console.log(task)
    if(task == ""){
        document.getElementById("tasklist").value=document.getElementById("Addtask").value
        document.getElementById("Addtask").value="";
    }
    else{
        document.getElementById("tasklist").value=task+"\n"+document.getElementById("Addtask").value
        document.getElementById("Addtask").value=""

    }

} 
handlenext=()=>{
    
   const nexttask=document.getElementById("tasklist").value.split("\n")
   if(nexttask[0]==""){
    document.getElementById("nexttask").value="no tasks"
   }
   else{
    document.getElementById("nexttask").value=nexttask[0]
   }
   nexttask.shift()
   document.getElementById("tasklist").value=nexttask.join("\n")
   
}