let navscroll = document.getElementById("add-scroll-anim"); addEventListener("scroll", function () {
    // nav scroll BG COLOR 
    if (window.scrollY > 200 && window.scrollY < 400) 
        { navscroll.classList.add("d-none"); } 
    else { navscroll.classList.remove("d-none"); } 
    
    
    if (window.scrollY > 400) { navscroll.classList.add("after-scroll-nav"); } 
    else { navscroll.classList.remove("after-scroll-nav"); } 
    
    if (window.scrollY > 400) { this.document.getElementById("mti").classList.add("d-grid"); }
     else { this.document.getElementById("mti").classList.remove("d-grid"); }
});