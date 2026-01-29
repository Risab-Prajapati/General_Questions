let buttons = document.querySelectorAll(".question button");

buttons.forEach(function(btn){
    btn.addEventListener("click",function(e){
        let parent = e.currentTarget.parentElement; 
        parent.classList.toggle("show-ans");              
    })
})