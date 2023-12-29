let textValue = document.getElementById('newText')

function f1(fontvar){
    textValue.style.fontFamily = fontvar.value
}

function f2(sizevar){
    textValue.style.fontSize = sizevar + "px";
}


function f3(colvar){
textValue.style.color = colvar ;
}

function f4() { 
//function to make the text bold using DOM method 
textValue.style.fontWeight = "800"; 
} 

function f5() { 
//function to make the text italic using DOM method 
textValue.style.fontStyle = "italic"; 
}

function f51() { 
//function to make the text italic using DOM method 
textValue.style.fontStyle = "normal"; 
}

function f6(){
textValue.style.textTransform = "uppercase"

}

function f7(){
textValue.style.textTransform = "lowercase"
}

