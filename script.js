const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addProject(){
    if(inputBox.value === ''){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let spam = document.createElement("span");
        Span.innerHTML = "\u00d7";
        li.appendchild(span);
    }
    inputBox.value = "";
    saveData();
 }

 listContainer.addEventListener("click", function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");   
        saveData();
    }
    else if(e.target.tagname ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showProject(){
    listContainer.innerHTML = localStorage.getItem

}

