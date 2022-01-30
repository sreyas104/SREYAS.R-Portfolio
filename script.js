document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 800) {
          document.getElementById('nav-fix').classList.add('fixed-top');
         
        } else {
          document.getElementById('nav-fix').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
          // document.getElementsByClassName('nav').style.paddingLeft = '0';
        } 
    });
  });


  
