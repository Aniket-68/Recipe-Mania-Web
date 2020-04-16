array =[];
array2=[];




  var myNodelist = document.getElementsByTagName("LI");
  var i;
  for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
  }
  
  // Click on a close button to hide the current list item
  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      array2.pop();
      div.style.display = "none";
    }
  }
  
  // Add a "checked" symbol when clicking on a list item
  var list = document.querySelector('ul');
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);
  
  // Create a new list item when clicking on the "Add" button
  function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    inputValue=inputValue; 
      array2.push(inputValue.toLowerCase());
    }
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
  
  function hello() {
    abc();
  }
  function abc(){
     
    var xhr=new XMLHttpRequest();
    xhr.open("GET","./resources/ingredient.php",true);
    xhr.onreadystatechange= function (){
        if (this.readyState==4 & this.status==200){
            array=JSON.parse(this.responseText);
            console.log(array);
            search(array,array2);
        }   
    }
xhr.send();
}
var str="";
  function search(data,data1)
{
    // console.log(data[3].ingredientid);
    // console.log(data[3].ingredient);
    for(i=0;i<data1.length;i++)
        {
            for(j=0;j<data.length;j++)
            {
             if(data1[i]==(data[j].ingredient))
             {
                //  console.log(data[j].ingredientid);
                if(i==(data1.length-1))
                {
                str=str+data[j].ingredientid;
                }
                else
                { 
                str=str+data[j].ingredientid+",";
                } 
            }
            }
        }
        // var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
// var theUrl = "./resources/upload.php?ingredients="+str;
// xmlhttp.open("GET",theUrl,true);
// var ingredients=str;
// xmlhttp.onreadystatechange= function (){
//     if (this.readyState==4 & this.status==200){
//         console.log("connected");
//     }
// ch.open("GET","./resources/rec.php?rid="+ele.id,true);
// xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
// xmlhttp.send();
console.log(document.getElementById('ch').value=str);
console.log(document.getElementById('ch').value);
// var new=document.getElementById('ch');
console.log(str);
}
