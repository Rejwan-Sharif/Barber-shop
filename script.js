// Sidenav Section

  var menubtn = document.getElementById("menubtn")
    var sidenav = document.getElementById("sidenav")
    var menu = document.getElementById("menu")

    sidenav.style.right ="-200px";

    menubtn.onclick= function(){
        if(sidenav.style.right =="-200px"){
            sidenav.style.right = "0"; 
            menu.src = "./Barber_Shop_img/close.png";
        }
        else {
            sidenav.style.right ="-200px";
            menu.src = "./Barber_Shop_img/menu.png";
        }
    }

// anchor tag smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });
    });
});





    // Preloder section
   var loder = document.getElementById("preloder");
   
   window.addEventListener("load", function(){
    loder.style.display = "none"
   })
   