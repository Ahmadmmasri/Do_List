
var element = document.getElementById("CreateButton");
let tasks=[]
var DeletAllbutton = document.createElement('button')
element.addEventListener('click', function(){
    let text= document.getElementById("InputText").value
    if(text){
        var div = document.createElement('div');
        var span = document.createElement('span');
        var button = document.createElement('button')
        span.className="textGraph"
        div.className="container"
        button.className="btn"
        button.textContent="x"
        tasks.push(text)
        button.addEventListener('click',function(e){
            e.target.parentElement.parentElement.remove()
            deleteFromLocal(tasks.pop())
        });
        span.appendChild(document.createTextNode(text));
        div.appendChild(span).appendChild(button);
        document.body.appendChild(div)
        localStorage.setItem('tasks', tasks);
        }
        if(tasks.length!==0){
            DeletAllbutton.textContent="🗑️"
            DeletAllbutton.className="deletAll"
            document.body.appendChild(DeletAllbutton)
        }
});

 function recover(){
    let num=localStorage.getItem("tasks");
    let arr=num?.split(",");
    if(arr?.length && arr[0]!=''){
        arr.forEach(element => {
            var div = document.createElement('div');
            var span = document.createElement('span');
            var button = document.createElement('button')
            span.className="textGraph"
            div.className="container"
            button.className="btn"
            button.textContent="x"
            button.addEventListener('click',function(e){
                e.target.parentElement.parentElement.remove()
                deleteFromLocal(element)
            });
            span.appendChild(document.createTextNode(element));
            div.appendChild(span).appendChild(button);
            document.body.appendChild(div)
        });
        if(arr.length!==0){
            DeletAllbutton.textContent="🗑️"
            DeletAllbutton.className="deletAll"
            document.body.appendChild(DeletAllbutton)
            DeletAllbutton.addEventListener('click',function(e){

                    var element= document.querySelectorAll(".textGraph")
                    element.forEach(function(e){
                            e.parentElement.remove()
                    })
                    this.remove()
                    localStorage.clear()
            });
        }

    }
}

function deleteFromLocal(element){
    let num=localStorage.getItem("tasks");
    var getJson = num.split(",")
    if(getJson){
       let arrayName = JSON.parse(JSON.stringify(getJson))
       arrayName=arrayName.filter(item => item !== element)
       if(arrayName.includes(element)) arrayName=[]
       localStorage.clear()
       localStorage.setItem("tasks",arrayName)
    }
}
recover()
