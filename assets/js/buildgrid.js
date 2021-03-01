
//function allows you to add a new element to a selected
function addNewDiv(addTo, elementType, className){
    let lastDiv = document.querySelector(addTo);
    console.log(lastDiv);
    let newDiv = document.createElement(elementType);
    let insertDiv = lastDiv.append(newDiv);
    let addClass = newDiv.classList.add(className,"JSDiv");
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
        errorDiv.innerText = "Select 1,2,3,4,6 or 12"; 
        input1.appendChild(errorDiv); 
    } else {
        //if passes tests call the addNewDiv function
        return addNewDiv(".row","div",`col-${colX}`);
        console.log("passed both tests")
    }
    //clear error message
    document.getElementById("input1").addEventListener("input", function(){
        errorDiv.innerText = ""; 
    })
    
}

let jsDivs = document.querySelectorAll(".JSDiv");

document.getElementById("clearButton").addEventListener("click", clearDivs);

function clearDivs(){
    
      for(let i = 0; i < jsDivs.length; i++){
        jsDivs[i].remove();
    } 
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

}