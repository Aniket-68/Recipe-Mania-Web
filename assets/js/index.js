// GRID SLIDER
data=[{"recipeid":1,"recipename":"Grilled Turkish Style","type":"non-veg","imurl":"assets\/img\/contents\/Achari_Paneer_Tikka.jpg","rcategory":"French Cuisine","ingredrients":"","steps":"step 1,step 2,step 3,","duration":"1hr 5mins"},{"recipeid":2,"recipename":"Paneer Tikka","type":"veg","imurl":"assets\/img\/contents\/Achari_Paneer_Tikka.jpg","rcategory":"Indian","ingredrients":"","steps":"Step 1,Step 2, Step 3","duration":"45mins"},{"recipeid":3,"recipename":"Chicken Lollypop","type":"non-veg","imurl":"assets\/img\/contents\/Chicken_Lollipop.JPG","rcategory":"Indian ","ingredrients":"2,10,4","steps":"Step 1,Step 2,Step 3,Step4","duration":"45mins"},{"recipeid":4,"recipename":"Chicken Tikka","type":"non-veg","imurl":"assets\/img\/contents\/chicken-tikka.jpg","rcategory":"Indian","ingredrients":"2,3,10,4","steps":"Step 1, Step2,Step3,Step 4","duration":"1hr"}];




// recipeid=[14,15,16,17];
function createrec(data)
{

for(i=0;i<data.length;i++)
{
    parent=document.getElementById('rec'); 
// New Card start
var newcard=document.createElement("div"); ///
newcard.setAttribute("class","card"); ///

var rimg=document.createElement("img");   ///
rimg.setAttribute("class","img-card-slider"); ///
var url="./"+data[i].imurl;
rimg.setAttribute("src",url); ///
newcard.appendChild(rimg); //

// card-body start
var newcardbody=document.createElement("div");
newcardbody.setAttribute("class","card-body");

var rname=document.createElement("h5"); //
rname.setAttribute("class","recipe-name"); //
rname.innerHTML=data[i].recipename; //
newcardbody.appendChild(rname);

var viewbutt=document.createElement("a");
viewbutt.setAttribute("class","w3-button");
viewbutt.href="#"+data[i].recipeid;
viewbutt.innerHTML="View";
newcardbody.appendChild(viewbutt);
//card body end
newcard.appendChild(newcardbody);
//icon start
var icons=document.createElement("div");
icons.setAttribute("class","icon");

var rtypec=document.createElement("img");

rtypec.setAttribute("class","icon-img");  

rurl="./assets/img/layouts/"+data[i].type+".jpg";
rtypec.setAttribute("src",rurl);
icons.appendChild(rtypec);


var timeic=document.createElement("i");
timeic.setAttribute("class","fa");
timeic.style.cssText="font-size:13px";
var dur =data[i].duration;
timeic.innerHTML="&#xf017; "+dur;

icons.appendChild(timeic);
// icon end
newcard.appendChild(icons);

//modal start
var modal=document.createElement("div"); //
modal.setAttribute("class","modalview");
rid=data[i].recipeid;
modal.setAttribute("id",rid);
// modal content start
var modalcont=document.createElement("div");
modalcont.setAttribute("class","w3-container w3-modal-content");

var cutbutt=document.createElement("a");
cutbutt.setAttribute("class","w3-button w3-display-topright")
cutbutt.href="#";
cutbutt.innerHTML="&times;"
modalcont.appendChild(cutbutt);

var mimg=document.createElement("img");
mimg.setAttribute("class","img-modal");
mimg.setAttribute("src",url);
modalcont.appendChild(mimg);

var mh1=document.createElement("h1"); // creation recipename in modal -- change
mh1.innerHTML=data[i].recipename;
modalcont.appendChild(mh1);

var mh2=document.createElement("h2");  // heading Ingredient in modal
mh2.innerHTML="Ingredients";
var mh2div=document.createElement("div");
mh2div.setAttribute("class","modal-ing-border");
modalcont.appendChild(mh2);
modalcont.appendChild(mh2div);

///
var mul=document.createElement("ul");// ingredient list
var muli=document.createElement("li"); // ingredient
muli.innerHTML="Potato"; // logic for loop
muli.innerHTML="Potato";
mul.appendChild(muli);

modalcont.appendChild(mul);
 
var mh21=document.createElement("h2");  // heading procedure in modal
mh21.innerHTML="Procedure";
var mh21div=document.createElement("div");
mh21div.setAttribute("class","modal-ing-border");
modalcont.appendChild(mh21);
modalcont.appendChild(mh21div);

var mol=document.createElement("ol"); // procedure list
var moli=document.createElement("li") // procedure 
var molisp=document.createElement("span");
molisp.innerHTML="01"
var molip=document.createElement("p");
molip.innerHTML="Gather the ingredient";
moli.appendChild(molisp);
moli.appendChild(molip);
mol.appendChild(moli);

modalcont.appendChild(mol);

//
var micon=document.createElement("div");
micon.setAttribute("class","micon")
// var span1=document.createElement("span");
var rtype=document.createElement("img");
rtype.setAttribute("class","modal-icon-img");  
console.log(rurl);
rtype.setAttribute("src",rurl);
// span1.appendChild(rtype);
micon.appendChild(rtype);

// var span2=document.createElement("span");
var timeicm=document.createElement("i");
timeicm.setAttribute("class","fa");
timeicm.innerHTML="&#xf017; "+dur;
// span2.appendChild(timeicm);
// micon.appendChild(span2);
micon.appendChild(timeicm);
modalcont.appendChild(micon);
// modal content end
modal.appendChild(modalcont);
// modal end
parent.appendChild(newcard);
parent.appendChild(modal);

}


}

createrec(data);