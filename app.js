const convertToUpper = ()=>{
    let targetText = document.getElementById("tagetText")
    let updatedText = targetText.value.toUpperCase();
    targetText.value=updatedText;
    alert("Text Converted To Upparcase!", "success");
}

document.getElementById("upper").addEventListener("click",convertToUpper)

const convertToLower = ()=>{
    let targetText = document.getElementById("tagetText")
    let updatedText = targetText.value.toLowerCase();
    targetText.value=updatedText;
    alert("Text Converted To LowerCase!", "success");
}

document.getElementById("lower").addEventListener("click",convertToLower)

const clearText = ()=>{
    let targetText = document.getElementById("tagetText")
    targetText.value = ""
    alert("Text Cleared!", "success");
    
}

document.getElementById("clear").addEventListener("click",clearText)

const copyText = () => {
    let targetText = document.getElementById("tagetText")
    let updatedText = targetText.value;
    navigator.clipboard.writeText(updatedText); 
    alert("Copied to Clipboard!", "success");
}

document.getElementById("copy").addEventListener("click",copyText)

const extraSpaces = () => {
    let targetText = document.getElementById("tagetText")
    let updatedText = targetText.value.split(/[ ]+/);
    targetText.value=updatedText.join(" ");
    alert("Extra spaces removed!", "success");
}

document.getElementById("spaces").addEventListener("click",extraSpaces)
let buttons = document.getElementsByClassName("btn")


setInterval(function preview () {

    let writtenText = document.getElementById("tagetText").value;
    let topreview = document.getElementById("preview");
    if (writtenText == ""){
        topreview.innerText = "Nothing to Preview !"
       
  for (let i=0; i<buttons.length; i++){
      console.log([i])
    buttons[i].disabled = true;
  }

    }
    else { 
        for (let i=0; i<buttons.length; i++){
            console.log([i])
          buttons[i].disabled = false;
        }
        topreview.innerText = writtenText;
    }
},1)