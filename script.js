
const linkBack = document.getElementsByClassName('origin')[0];
const text = document.getElementById('origin');
const button = document.getElementById('more');



text.style.height ="60vh";
text.style.overflow = "hidden"


button.onclick = function (){
    if (text.style.height === "60vh"){  
     text.style.height = "auto";
     button.innerHTML = "Read less...";  
     

    }else if(text.style.height === "auto"){
        text.style.height = "60vh";
        button.innerHTML = "Read more...";
        linkBack.scrollIntoView();
        }
    }
