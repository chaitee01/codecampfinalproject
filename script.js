function editname() {
    document.getElementById('name').contentEditable = true;
}

function editphone() {
    document.getElementById('phone').contentEditable = true;
}


function editemail() {
    document.getElementById('email').contentEditable = true;
}

function editabout() {
    document.getElementById('aboutme').contentEditable = true;
}


//keyskill edit
let items = document.querySelectorAll("#keyskillul LI"),
    tab = [], index;



for(var i=0; i<items.length; i++){
    tab.push(items[i].innerHTML);
}

for(var i=0; i<items.length; i++){
    items[i].onclick = function() {
      index = tab.indexOf(this.innerHTML);
        console.log(this.innerHTML + " INDEX = " + index)
    };
}

function refreshArray() {
    tab.length = 0;
    items = document.querySelectorAll("#keyskillul LI")
    
    for(var i = 0; i < items.length; i++){
        tab.push(items[i].innerHTML);
    }
}
function addLi() {
    let addlist = prompt("Fill you keyskills");
    let listNode = document.getElementById('keyskillul');
    let linode = document.createElement("LI");
    linode.tabIndex = "1";
    let txtNode = document.createTextNode(addlist);

    linode.appendChild(txtNode);
    listNode.appendChild(linode);
    
    refreshArray();
    
    linode.onclick = function() {
      index = tab.indexOf(linode.innerHTML);
        console.log(linode.innerHTML + " INDEX = " + index)
    };
    
}

function delLi() {
    
    console.log(this.innerHTML + " INDEX = " + index);
    items[index].parentNode.removeChild(items[index]);
}
//techskill edit
let items1 = document.querySelectorAll("#techskillul LI"),
    tab1 = [], index1;

for(var i=0; i<items1.length; i++){
    tab1.push(items1[i].innerHTML);
}

for(var i=0; i<items1.length; i++){
    items1[i].onclick = function() {
      index1 = tab1.indexOf(this.innerHTML);
        console.log(this.innerHTML + " INDEX = " + index1)
    };
}

function refreshArray1() {
    tab1.length = 0;
    items1 = document.querySelectorAll("#techskillul LI")
    
    for(var i = 0; i < items1.length; i++){
        tab1.push(items1[i].innerHTML);
    }
}

function addLi1() {
    let addlist = prompt("Fill you techskills");
    let listNode = document.getElementById('techskillul');
    let linode = document.createElement("LI");
    linode.tabIndex = "1";
    let txtNode = document.createTextNode(addlist);

    linode.appendChild(txtNode);
    listNode.appendChild(linode);
    
    refreshArray1();
    
    linode.onclick = function() {
      index1 = tab1.indexOf(linode.innerHTML);
        console.log(linode.innerHTML + " INDEX = " + index1)
    };
    
}
function delLi1() {
    
    console.log(this.innerHTML + " INDEX = " + index1);
    items1[index1].parentNode.removeChild(items1[index1]);
}
//change theme
function changetheme() {
    let theme = document.getElementById("select").value;
    if(theme == "Original"){
        document.getElementById("container1").style.backgroundColor = "#005050";
        document.getElementById("container2").style.backgroundColor = "#fff"//#006666
        document.getElementById("strongtext").style.color = "#006666";
        document.getElementById("strongtext1").style.color = "#006666";
        document.getElementById("strongtext2").style.color = "#006666";
        document.getElementById("strongtext3").style.color = "#006666";
        document.getElementById("strongtext4").style.color = "#006666";
        document.getElementById("strongtext5").style.color = "#006666";
        document.getElementById("strongtext6").style.color = "#006666";
        document.getElementById("strongtext7").style.color = "#006666";
        document.getElementById("strongtext8").style.color = "#006666";
        document.getElementById("strongtext9").style.color = "#000";
        document.getElementById("strongtext10").style.color = "#006666";
        document.getElementById("strongtext11").style.color = "#006666";
        document.getElementById("name").style.color = "#fff";
        document.getElementById("email").style.color = "#fff";
        document.getElementById("phone").style.color = "#fff";
        document.getElementById("aboutme").style.color = "#000";
        document.getElementById("keyskillul").style.color = "#000";
        document.getElementById("techskillul").style.color = "#000";
        document.getElementById("subexperul1").style.color = "#000";
        document.getElementById("subexperul2").style.color = "#000";
        document.getElementById("subtrainingul1").style.color = "#000";
        document.getElementById("subtrainingul2").style.color = "#000";
        document.getElementById("addicon").style.color = "#000";
    }else if(theme == "Dark"){
        document.getElementById("container1").style.backgroundColor = "#444749";
        document.getElementById("container2").style.backgroundColor = "#1f1f21";//1f1f21
        document.getElementById("strongtext").style.color = "#5ac8fa";
        document.getElementById("strongtext1").style.color = "#5ac8fa";
        document.getElementById("strongtext2").style.color = "#5ac8fa";
        document.getElementById("strongtext3").style.color = "#5ac8fa";
        document.getElementById("strongtext4").style.color = "#5ac8fa";
        document.getElementById("strongtext5").style.color = "#5ac8fa";
        document.getElementById("strongtext6").style.color = "#5ac8fa";
        document.getElementById("strongtext7").style.color = "#5ac8fa";
        document.getElementById("strongtext8").style.color = "#5ac8fa";
        document.getElementById("strongtext9").style.color = "#39d959";
        document.getElementById("strongtext10").style.color = "#5ac8fa";
        document.getElementById("strongtext11").style.color = "#5ac8fa";
        document.getElementById("name").style.color = "#39d959";
        document.getElementById("email").style.color = "#39d959";
        document.getElementById("phone").style.color = "#39d959";
        document.getElementById("aboutme").style.color = "#39d959";
        document.getElementById("keyskillul").style.color = "#39d959";
        document.getElementById("techskillul").style.color = "#39d959";
        document.getElementById("subexperul1").style.color = "#39d959";
        document.getElementById("subexperul2").style.color = "#39d959";
        document.getElementById("subtrainingul1").style.color = "#39d959";
        document.getElementById("subtrainingul2").style.color = "#39d959";
        document.getElementById("addicon").style.color = "#fff";
        
    }
}