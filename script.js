
const linkBack = document.getElementsByClassName('spaceTop')[0];
const text = document.getElementById('origin');
const button = document.getElementById('more');



text.style.height ="75vh";
text.style.overflow = "hidden"


button.onclick = function (){
    if (text.style.height === "75vh"){  
     text.style.height = "auto";
     button.innerHTML = "Less";  
     

    }else if(text.style.height === "auto"){
        text.style.height = "75vh";
        button.innerHTML = "More";
        linkBack.scrollIntoView();
        }
    }
