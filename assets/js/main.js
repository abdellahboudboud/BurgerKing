document.addEventListener('scroll',function(){
    const nav = document.querySelector('nav');
    nav.classList.toggle('sticky',window.scrollY > 0);
});

const tablet = window.matchMedia("(min-width:768px) and (max-width:1024px)");

tablet.addListener(tabletSize);

function tabletSize(e){
    if(e.matches){
        var items = document.querySelectorAll('.Menu .container .items .row .items-row');
        for(var i=0;i<items.length;i++){
            items[i].className = "col-md-4 mx-auto items-row";
        }
        
    }
}

const desktop = window.matchMedia("(min-width:1025px)");

desktop.addListener(desktopSize);

function desktopSize(e){
    if(e.matches){
        var items = document.querySelectorAll('.Menu .container .items .items-row');
        for(var i=0;i<items.length;i++){
            items[i].className = "col-md-3 mx-auto items-row"
        }
    }
}