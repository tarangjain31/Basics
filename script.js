let input= document.querySelector("#imp");
let ul= document.querySelector("#list");
input.addEventListener("keypress", function(e){
    if(e.code=="Enter"){
        console.log(1);
        let task= e.currentTarget.value;
        task=task.trim();// removes spaces
        if(task=="") return;
        let li=document.createElement("li");
        li.innerText=task;
        li.addEventListener("dblclick",function(e) {
            e.currentTarget.remove();
        });
        ul.append(li);
        e.currentTarget.value=""; //to clear it again so that the next input can be taken
    }
});