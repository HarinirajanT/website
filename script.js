let menu =document.querySelector('#menu-btn');
let navbar=document.querySelector('.navbar');

menu.onclick = ( ) =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

document.querySelector('#login-btn').onclick = () =>{
    document.querySelector('.login-form-conatiner').classList.toggle('active');
}

document.querySelector('#close-login-form').onclick = () =>{
    document.querySelector('.login-form-container').classList.remove('active');
}
window.onscroll = () =>{
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }
    else{
        document.querySelector('.header').classList.remove('active');
    }

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

window.onload = () =>{
  
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }

}

document.querySelector('.home').onmousemove = (e) =>{


    document.querySelectorAll('.home-parallax').forEach(elm =>{

    let speed = elm.getAttribute('data-speed');

    let x = (window.innerWidth - e.pageX * speed) / 90;
    let y = (window.innerHeight - e.pageY * speed) / 90;

    elm.style.transform = `translateX(${y}px) translateY(${x}px)`;


    });

};

document.querySelector('.home').onmouseleave = () =>{

    document.querySelectorAll('.home-parallax').forEach(elm =>{

        elm.style.transform = `translateX(0px) translate(0px)`;

    });
};


var swiper = new Swiper(".vehicles-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true, 
    grabCursor:true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });
/*  document.querySelector('#login-btn').onclick = () =>{
    document.querySelector('.login-form-conatiner').classList.toggle("active");
  }
*/
function validate()
{
  var password=document.getElementById("password").value;
  var password2=document.getElementById("password2").value;
  if(password==password2){
    window.location.href="index.html";
  }
  else{
    alert("invalid password");
  }
}

