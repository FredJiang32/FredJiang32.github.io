// =========================
// Fred AI Homepage V4.1
// Interaction Script
// =========================



/*
  Scroll Reveal Animation

  页面滚动时，
  内容逐渐出现
*/


const reveals = document.querySelectorAll(".reveal");


const observer = new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("active");


}

});


},

{

threshold:0.15

}

);



reveals.forEach(

(element)=>{

observer.observe(element);

}

);







/*
 Hero Image Floating Effect

 人物轻微漂浮
 增加 Apple 官网感
*/


const photo = document.querySelector(".hero-photo img");


let position = 0;


function floating(){


position += 0.02;


if(photo){


photo.style.transform =

`translateY(${Math.sin(position)*8}px)`;

}


requestAnimationFrame(floating);


}


floating();







/*
 Smooth Anchor Navigation

 导航点击平滑滚动
*/


document.querySelectorAll("nav a")

.forEach(link=>{


link.addEventListener(

"click",

function(e){


const target =

document.querySelector(

this.getAttribute("href")

);



if(target){


e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}


}

);


});







/*
 Hero Button

 点击 Explore
 滚动到 About
*/


const explore =

document.querySelector(".primary");


if(explore){


explore.onclick=function(){


document
.querySelector("#about")
.scrollIntoView({

behavior:"smooth"

});


};


}
