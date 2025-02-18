(function(){
    "use struct";
    const root = document.documentElement;
    const navToogle = document.querySelector("#js-navToggle");

    navToogle.addEventListener("click", function(){
        root.classList.toggle("show-nav");

    });

    const eventPP = document.querySelector("#js-eventPP");

    if(eventPP){
        const eventOpenBtn = document.querySelector("#js-eventOpenBtn");

        eventOpenBtn.addEventListener("click",function (){
        root.classList.add("show-event-popup");
        });

        eventPP.addEventListener("click", function(event){
            if(
                event.target === this||
                event.target.classList.contains("jsppCloseBtn")
            ){
                root.classList.remove("show-event-popup");
            }
        });

        document.addEventListener("keyup",function(event){
            if(event.key ==="Escape")
        })
    }
    
})();