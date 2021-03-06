
//function allows you to add a new element to a selected
function addNewDiv(addTo, elementType, className){
    let lastDiv = document.querySelector(addTo);
    console.log(lastDiv);
    let newDiv = document.createElement(elementType);
    lastDiv.append(newDiv);
    newDiv.classList.add(className,"JSDiv");
    newDiv.innerHTML = `I'm a new ${className} ${elementType}`;   
}

document.getElementById("gridButton").addEventListener("click", getInputValue);


function getInputValue(){
    
    let colX = document.getElementById("col-x").value;
    
    let input1 = document.getElementById("input1");
    let errorDiv = document.createElement("div");
    errorDiv.style.color="red";
    
    
    if(colX < 1){
        errorDiv.innerText = "Please add a value"; 
        input1.appendChild(errorDiv);
    } else if(colX > 12){
        errorDiv.innerText = "Select # between 1 - 2"; 
        input1.appendChild(errorDiv); 
    } else {
        //if passes tests call the addNewDiv function
        console.log("passed both tests")
        return addNewDiv(".row","div",`col-${colX}`);
        
    }
    //clear error message
    document.getElementById("input1").addEventListener("input", function(){
        errorDiv.innerText = ""; 
    })
    
}


document.getElementById("colorButton").addEventListener("click", addColor);

function addColor(){
    
    let bgColor = document.getElementById("bg-color").value;
    console.log(bgColor);
    let newDivs = document.querySelectorAll(".JSDiv");
    console.log(newDivs);
    for(let i = 0; i < newDivs.length; i++){
        newDivs[i].style.backgroundColor = bgColor;
    }

};



document.querySelector("#clearButton").addEventListener("click", clearDivs);
let jsDivs;
function clearDivs(){
      jsDivs = document.querySelectorAll(".JSDiv");
      
      for(let i = 0; i < jsDivs.length; i++){
        jsDivs[i].remove();
    } 
}

document.querySelector("#deleteButton").addEventListener("click", deleteLastDiv);
let allDivs;
function deleteLastDiv(){
      allDivs = document.querySelectorAll(".JSDiv");
      
      for(let i = allDivs.length -1 ; i >= 0; i--){
        return allDivs[i].remove();
    } 
}


