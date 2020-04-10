array =[];
function abc(){
     
    var xhr=new XMLHttpRequest();
    xhr.open("GET","./resources/recipe.php",true);
    xhr.onreadystatechange= function (){
        if (this.readyState==4 & this.status==200){
            array=JSON.parse(this.responseText);
            createRec(array);
        }   
    }
xhr.send();
}


function createRec (data){
    parent =document.getElementById("rec");
    for (i=0;i<data.length;i++){
        var newDiv=document.createElement("div");
        newDiv.setAttribute("class","card col-md-3 col-sm-12");
        newDiv.setAttribute("id",data[i].recipeid);
        var newcontent=document.createElement("div");
        newcontent.innerHTML=data[i].recipename;
        newcontent.setAttribute('class',"recipe-name")
        var img =document.createElement("img");
        img.setAttribute("class","card-img-top");
        url = "./"+data[i].imurl;
        img.setAttribute("src",url);
        newDiv.appendChild(img);
        newDiv.appendChild(newcontent);
        newDiv.setAttribute("onclick","fetch(this)" );
        parent.appendChild(newDiv);         
    }
}


function fetch(ele){
    var ch=new XMLHttpRequest();
    ch.open("GET","./resources/rec.php?rid="+ele.id,true);
    ch.onreadystatechange= function (){
        if (this.readyState==4 & this.status==200){
            console.log(this.responseText);
            var data=JSON.parse(this.responseText);
            expand(data[1],ele);
        }   
    }
ch.send();


}

function expand(data,ele){
    string =data.split(",");
    alert(string);
    for(i=0;i<string.length;i++){
        // x = document.createElement("li");
        // x.innerHTML=string[i];
        // ele.appendChild(x)
        // console.log(x.innerHTML);
        // console.log(ele)
        
        
    }
}

abc();