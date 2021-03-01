let col6 = document.getElementsByClassName("col-6");

function setCol6(){
    for(col in col6){
        col6[col].innerHTML = `<p>I am a col6</p>`
    }
};

function setCol3(){
    const col3 = document.getElementsByClassName("col-3");
    for(col in col3){
        col3[col].innerHTML = `<p>I am a col3</p>`
    }
};

//function allows you to add a new element to a selected
function addNewDiv(addTo, elementType, className){
    let lastDiv = document.querySelector(addTo);
    console.log(lastDiv);
    let newDiv = document.createElement(elementType);
    lastDiv.append[0](newDiv);
    newDiv.classList.add(className);
    newDiv.innerHTML = `I'm a new ${elementType}`;   
}

addNewDiv(".row","div","col-12");
addNewDiv(".row","div","col-6");
addNewDiv(".row","div","col-6");
addNewDiv("body", "button", "click-button");


function styleTitle(){
    let title = document.querySelector(".col-12");
    console.log(title);
    title.style.backgroundColor = "white";
    title.style.marginBottom = "25px";
}


function changeRed(id){
    let selectedElement = document.getElementById(id);
    console.log(selectedElement);
    selectedElement.style.backgroundColor = "red";
}

//pass element you want to select as parameter
function select(selection){
    document.querySelector(selection);
}


setCol6();
setCol3();

styleTitle();
changeRed("title1");

document.querySelector("button").innerText = "Add New Div";
document.querySelector("button").style.marginTop = "25px"

document.querySelector("button").addEventListener("click", function(){
    document.getElementById("title1").style.backgroundColor = "blue";
    addNewDiv(".row","div","col-12");
});

 //make three inputs in html. Take user inputs from form for class-name, background-color and inner text and use these three inputs to build a 

