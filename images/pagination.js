let link = document.getElementsByClassName("link");
let currentValue = 1;

function activeLink(){
    for(l of link){
        l.classList.remove("active");
    }
    event.target.classList.add("active");
    currentValue = event.target.value;
}

function backbtn(){
    if(currentValue > 1){
        for(l of link){
            l.classList.remove("active");
        }
        currentValue--;
        link[currentValue-1].classList.add("active");
    }
}

function nextbtn(){
    if(currentValue < 6){
        for(l of link){
            l.classList.remove("active");
        }
        currentValue++;
        link[currentValue-1].classList.add("active");
    }
}

function uploadFile(){
    var totalfiles = document.getElementById('files').files.length;

    if(totalfiles > 0){
        alert("Success")
    }
    else{
        alert("Please select a file")
    }
}