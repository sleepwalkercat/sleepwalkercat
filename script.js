document.addEventListener("DOMContentLoaded", function(){
    var menu = document.querySelectorAll('nav li');
    menu.forEach(entry =>{
            if (entry.querySelectorAll("ul").length !== 0){
                    var button = document.createElement("BUTTON");   
                    button.innerHTML = "<span>▼</span>";                   
                    button.addEventListener('click', () =>{
                        button.classList.toggle("mobile-open");
                        entry.querySelector("ul").classList.toggle("mobile-open");
                    })
                    entry.insertBefore(button, entry.children[1]);
            }
    });
});
