
function addTask(){
    var button = document.getElementById('submit')
    button.addEventListener('click', function(e){
        var task = document.getElementById("todo").value;
        var list = document.getElementById("biglist");
        var li = document.createElement("li");
        var text = document.createTextNode(task);
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "name";
        checkbox.value = "value";
        checkbox.id = "checkbox";
        checkbox.onclick = function(){
            if(this.checked){
                li.style.textDecoration = "line-through";
                countTasks();
            } else {
                li.style.textDecoration = "none";
                countTasks();
            }
        }
        
        li.appendChild(checkbox);
        li.appendChild(text);
        list.insertBefore(li, list.childNodes[0]);
        tasks.push(new taskfunc(task,new Date()));
        countTasks();
    })
}
function taskfunc(task,date){
    this.task = task
    this.date = date
}


function countTasks(){
    
    var output = document.getElementById("output");
    var ul = document.getElementById("biglist");
    var done = 0;
    var li = ul.getElementsByTagName("li");
    var countTotal = li.length;
    for (i = 0; i < li.length; i++) {
        if (li[i].getElementsByTagName("input")[0].checked) {
            done++;
        }
    }
    output.placeholder = done + "/"+ countTotal + " completed";

}



var tasks = [];
addTask();