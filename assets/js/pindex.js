// GRID SLIDER
data=[{"recipeid":1,"recipename":"Grilled Turkish Style","type":"non-veg","imurl":"assets\/img\/contents\/Achari_Paneer_Tikka.jpg","rcategory":"French Cuisine","ingredrients":"","steps":"step 1,step 2,step 3,","duration":"1hr 5mins"},{"recipeid":2,"recipename":"Paneer Tikka","type":"veg","imurl":"assets\/img\/contents\/Achari_Paneer_Tikka.jpg","rcategory":"Indian","ingredrients":"","steps":"Step 1,Step 2, Step 3","duration":"45mins"},{"recipeid":3,"recipename":"Chicken Lollypop","type":"non-veg","imurl":"assets\/img\/contents\/Chicken_Lollipop.JPG","rcategory":"Indian ","ingredrients":"2,10,4","steps":"Step 1,Step 2,Step 3,Step4","duration":"45mins"},{"recipeid":4,"recipename":"Chicken Tikka","type":"non-veg","imurl":"assets\/img\/contents\/chicken-tikka.jpg","rcategory":"Indian","ingredrients":"2,3,10,4","steps":"Step 1, Step2,Step3,Step 4","duration":"1hr"}];




// recipeid=[14,15,16,17];
function createrec(data)
{

for(i=0;i<data.length;i++)
{
    parent=document.getElementById('rec'); 

var newcard=document.createElement("div"); //
newcard.setAttribute("class","card1"); //

var rimg=document.createElement("img");   //
rimg.setAttribute("class","img-card-slider"); //
var url="./"+data[i].imurl;
rimg.setAttribute("src",url); //
newcard.appendChild(rimg);

var rname=document.createElement("p"); //
rname.setAttribute("class","recipe-name"); //
rname.innerHTML=data[i].recipename; //
newcard.appendChild(rname);
// rname.innerHTML();

// card container content  start
var modal=document.createElement("div"); //
modal.setAttribute("class","w3-container"); // 
var viewbutt=document.createElement("button");//
viewbutt.setAttribute("class","w3-button");//
viewbutt.innerHTML="view";//
viewbutt.onclick= fetch(this);
// rid=data[i].recipeid;

// modal.appendChild(viewbutt);
// // viewbutt.setAttribute("onclick",document.getElementById(i+1).style.display='block');
// // modal pop container start
// var mpop=document.createElement("div"); //

// mpop.setAttribute("class","w3-modal");
// mpop.setAttribute("id",rid); // recipeid
// viewbutt.onclick = function()
// {
//     var div1=document.getElementById(rid);
//     div1.style.display='block';
// }
// viewbutt




// // // modal content start
// // var mcont=document.createElement("div");
// // mcont.setAttribute("class","w3-modal-content w3-container");

// // var cbutt=document.createElement("span");
// // cbutt.setAttribute("class","w3-button w3-display-topright");
// // // cbutt.setAttribute("onclick",document.getElementById(i+1).Style.display='none');
// // cbutt.innerHTML="&times;";
// // mcont.appendChild(cbutt);
// // cbutt.onclick = function()
// // {
// //     var div2=document.getElementById(rid);
// //     div2.style.display='none'
// // }

// // var mimg=document.createElement("img");
// // mimg.setAttribute("src",url);
// // var mh1=document.createElement("h1"); // creation recipename in modal -- change
// // mh1.innerHTML=data[i].recipename;
// // mcont.appendChild(mimg);
// // mcont.appendChild(mh1);

// // var mh2=document.createElement("h2");  // heading Ingredient in modal
// // mh2.innerHTML="Ingredients";
// // var mh2div=document.createElement("div");
// // mh2div.setAttribute("class","border2");
// // mcont.appendChild(mh2);
// // mcont.appendChild(mh2div);

// // var mul=document.createElement("ul");// ingredient list
// // var muli=document.createElement("li"); // ingredient
// // muli.innerHTML="Potato"; // logic for loop
// // muli.innerHTML="Potato";
// // mul.appendChild(muli);

// // mcont.appendChild(mul);
 
// // var mh21=document.createElement("h2");  // heading procedure in modal
// // mh21.innerHTML="Procedure";
// // var mh21div=document.createElement("div");
// // mh21div.setAttribute("class","border2");
// // mcont.appendChild(mh21);
// // mcont.appendChild(mh21div);

// // var mol=document.createElement("ol"); // procedure list
// // var moli=document.createElement("li") // procedure 
// // var molisp=document.createElement("span");
// // molisp.innerHTML="01"
// // var molip=document.createElement("p");
// // molip.innerHTML="Gather the ingredient";
// // moli.appendChild(molisp);
// // moli.appendChild(molip);
// // mol.appendChild(moli);

// // mcont.appendChild(mol);

// // var rtype=document.createElement("img");
// // rtype.setAttribute("class","icon-img1");  
// // rurl="./assets/img/layouts/"+data[i].type+".jpg"; // 
// // console.log(rurl);
// // rtype.setAttribute("src",rurl);
// // mcont.appendChild(rtype);

// // var timeic=document.createElement("i");
// // timeic.setAttribute("class","fa");
// // var dur =data[i].duration;
// // timeic.innerHTML="&#xf017; "+dur;
// // mcont.appendChild(timeic);

// // var time=document.createElement("i");  // creation of time 
// // time.innerHTML=data[i].duration; // assigning time 
// // mcont.appendChild(time);

// // // modal content end
// // mpop.appendChild(mcont);
// // modal pop container end

// modal.appendChild(mpop);
// //card container end

// // cont.innerHTML="Some text. Some text. Some text.";
// // cont.innerHTML="Some text. Some text. Some text.";
// newcard.appendChild(modal);
// var icons=document.createElement("div");
// icons.setAttribute("class","icons");

// var rtype1=document.createElement("img");
// rtype1.setAttribute("class","icon-img");  
// rtype1.setAttribute("src",rurl);
// icons.appendChild(rtype1);
// var timeic1=document.createElement("i");
// timeic1.setAttribute("class","fa");
// timeic1.style.cssText="font-size:13px";
// timeic1.innerHTML="&#xf017; "+dur;

// icons.appendChild(timeic1);
// newcard.appendChild(icons);

parent.appendChild(newcard);
}

}

function fetch(ele)
{
ele.removeclass();    
console.log(ele);
}



/* <div class="card1">
<img class="img-card-slider" src="F&B_logo.jpg">//</img>
<p class="recipe-name">RECIPE1</p>

<!-- Modal= VIEW button -->
<div class="w3-container">
  <button onclick="document.getElementById('id21').style.display='block'" class="w3-button">VIEW</button>
  <div id="id21" class="w3-modal">  
  <div  class=" w3-modal-content w3-container">
    <span onclick="document.getElementById('id21').style.display='none'"
          class="w3-button w3-display-topright">&times;</span>
        <p>Some text. Some text. Some text.</p>
        <p>Some text. Some text. Some text.</p>
    </div>
  </div>
  
</div>
</div> */


{/* <div class="card1">//1
      <img class="img-card-slider" src="F&B_logo.jpg">//
      <p class="recipe-name">RECIPE2</p>//

      <!-- Modal= VIEW button -->
      <div class="w3-container"> // 2
        <button onclick="document.getElementById('id02').style.display='block'" class="w3-button">VIEW</button>//
        <div id="id02" class="w3-modal"> // 3
            <div class="w3-modal-content w3-container"> // 4
              <span onclick="document.getElementById('id02').style.display='none'"
                class="w3-button w3-display-topright">&times;</span>//
              <img class="img-modal" src="F&B_logo.jpg" alt="receipe1">//
              <h1>Recipe2</h1>//
              <h2 class="border2">Ingredients</h2>//
 
                <ul> //
                  <li>ingredient 1</li>//
                  <li>ingredient 2</li>//
                </ul>//
              <h2 class="border2">Procedure</h2>  //
              <ol>
                <li><span>01</span><p>some procedure to make your recipe delicious</p></li>
                <li><span>02</span><p>some procedure to make your recipe delicious</p></li>
                <li><span>03</span><p>some procedure to make your recipe delicious</p></li>
              </ol>   
              <img class="icon-img1" src="./assets/img/layouts/veg_icon.jpg">//
              <i style="font-size: 20px;" class="fa">&#xf017;</i>   
              <i>xx min</i>  
            </div> 4//
        </div> 3//
      </div> 2// 
      
      <!-- Icon div for recipe -->
    
      <div class="icon">
        <img class="icon-img" src="./assets/img/layouts/veg_icon.jpg">
        <!-- <i style="font-size: 13px;" class="fas fa-heart"></i>      -->
        <i style="font-size: 13px;" class="fa">&#xf017; 55mins</i>
      </div> 
    
      </div> 1 
*/}

createrec(data);