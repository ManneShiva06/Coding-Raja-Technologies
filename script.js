function addNewWEField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder", "Enter here")

    let weOb =document.getElementById("we");
    let weAddButtonOb= document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder", "Enter here")

    let aqOb =document.getElementById("aq");
    let aqAddButtonOb= document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);
}



//generating CV
function generateCV(){
    //console.log("generating CV")
    let nameField=document.getElementById("nameField").value

    let nameT1=document.getElementById('nameT1')

    nameT1.innerHTML=nameField;

    document.getElementById('nameT2').innerHTML=nameField

    //contact

    document.getElementById('contactT').innerHTML = document.getElementById("contactField").value;

    //address

    document.getElementById("addressT").innerHTML=document.getElementById('addressField').value

   //links

   document.getElementById("LinkT").innerHTML=document.getElementById('linkedinField').value

   document.getElementById("INST").innerHTML=document.getElementById('instaField').value

   document.getElementById("FBT").innerHTML=document.getElementById('FbField').value

   //objective

   document.getElementById('objectiveT').innerHTML=document.getElementById('objectiveField').value;

   //Work Experience

   let wes =document.getElementsByClassName('weField');

   let str=""

   for(let e of wes){
    str=str +` <li> ${e.value} </li> `;
   }
   document.getElementById('weT').innerHTML=str;

   //Academic Qualification

   let aqs =document.getElementsByClassName('eqField');

   let Str=""

   for(let e of aqs){
    Str=Str +` <li> ${e.value} </li> `;
   }
   document.getElementById('aqT').innerHTML=Str;

   //Skills

   document.getElementById('SkillTS').innerHTML=document.getElementById('SkField').value;


   //code for setting image

   let file=document.getElementById('imgField').files[0];
   console.log(file);
   let reader=new FileReader()

   reader.readAsDataURL(file);
   console.log(reader.result);

   //set the img to templete
    
   reader.onloadend=function(){
   document.getElementById('imgTemplate').src =reader.result;
   };

   
   document.getElementById('cv-form').style.display='none'
   document.getElementById('cv-template').style.display='block'
}

//printing cv

function printCV() {
    window.print();
}
