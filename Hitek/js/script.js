const sidebar = document.getElementById("sidebar");

function openMenu(){
    sidebar.style.width = "244px";
    sidebar.style.transition = '.7s';
}

function closeMenu(){
    sidebar.style.width = "45px";
    sidebar.style.transition = '.7s';
}

let slideIndex = 0;
let slide = document.getElementsByClassName('myslide');
showSlides(slideIndex);

function nextSlide(){
    slideIndex++;
    showSlides();
}

function prevSlide(){
    slideIndex--;
    showSlides();
}

function showSlides(){
    if(slideIndex>2){
        slideIndex = 0;
    }
    else if(slideIndex<0){
        slideIndex = 2;
    }
    if(slideIndex===0){
        document.querySelector(".subtitle").innerHTML = "Wireless & Loud";
        document.querySelector(".title").innerHTML = "Audio Speaker A1";
        document.querySelector(".text").innerHTML = "Lasted answer oppose to ye months no esteem.<br>Branched is on an ecstatic directly it.";
        document.querySelector(".price").innerHTML = "Buy Now $299";
        document.getElementById("imgs-left").style.background = 'url(../img/vega-slider-bg-3-opt.jpg)';    
        document.getElementById("imgs-left").style.transition = "all 1s";
    }
    else if(slideIndex===1){
        document.querySelector(".subtitle").innerHTML = "Brand New Gadgets";
        document.querySelector(".title").innerHTML = "Smart Watch";
        document.querySelector(".text").innerHTML = "Letraset used it on their dry-transfer sheets,and again<br>during the 90s as desktop publishers.";
        document.querySelector(".price").innerHTML = "Buy Now $499";
        document.getElementById("imgs-left").style.background = 'url(../img/vega-slider-bg-2-opt.jpg)';
        document.getElementById("imgs-left").style.transition = "all 2s";
    }
    else if(slideIndex===2){
        document.querySelector(".subtitle").innerHTML = "Company Newest";
        document.querySelector(".title").innerHTML = "Notebook Pro";
        document.querySelector(".text").innerHTML = "Today it's seen all around the web, on templates,<br>websites, and all popular stock designs.";
        document.querySelector(".price").innerHTML = "Buy Now $1199";
        document.getElementById("imgs-left").style.background = 'url(../img/vega-slider-bg-1-opt.jpg)';
        document.getElementById("imgs-left").style.transition = "all 2s";
    }
}

function openDropHome(){
    document.getElementsByClassName("home-content")[0].style.display = "flex";
    document.getElementsByClassName("home-content")[0].style.justifyContent = "space-around";
    document.getElementsByClassName("home-content")[0].style.alignItems = "center";
}

function closeDropHome(){
    document.getElementsByClassName("home-content")[0].style.display = "none";
}

function openDropShop(){
    document.getElementsByClassName("shop-content")[0].style.display = "flex";
    document.getElementsByClassName("shop-content")[0].style.justifyContent = "space-around";
    document.getElementsByClassName("shop-content")[0].style.alignItems = "center";
}

function closeDropShop(){
    document.getElementsByClassName("shop-content")[0].style.display = "none";
}

function openDropBlog(){
    document.getElementsByClassName("blog-content")[0].style.display = "flex";
    document.getElementsByClassName("blog-content")[0].style.justifyContent = "space-around";
    document.getElementsByClassName("blog-content")[0].style.alignItems = "center";
}

function closeDropBlog(){
    document.getElementsByClassName("blog-content")[0].style.display = "none";
}

function openDropElements(){
    document.getElementsByClassName("elements-content")[0].style.display = "flex";
    document.getElementsByClassName("elements-content")[0].style.justifyContent = "space-around";
    document.getElementsByClassName("elements-content")[0].style.alignItems = "center";
}

function closeDropElements(){
    document.getElementsByClassName("elements-content")[0].style.display = "none";
}

const ic1 = document.querySelectorAll(".ic1");
const ic2 = document.querySelectorAll(".ic2");
const ic3 = document.querySelectorAll(".ic3");
const ic4 = document.querySelectorAll(".ic4");
const ic5 = document.querySelectorAll(".ic5");
const ic6 = document.querySelectorAll(".ic6");
const ic7 = document.querySelectorAll(".ic7");
const ic8 = document.querySelectorAll(".ic8");
const ic9 = document.querySelectorAll(".ic9");
const ic10 = document.querySelectorAll(".ic10");
const ic11 = document.querySelectorAll(".ic11");
const ic12 = document.querySelectorAll(".ic12");
const ic13 = document.querySelectorAll(".ic13");
const tog = document.querySelectorAll(".tog");
const shopCart = document.querySelectorAll(".fa-shopping-cart");
const sp = document.querySelectorAll(".sp");


function prodFuncBlock(n){
    for(let i=0;i<ic1.length;i++){
        if(n===0){
            ic1[i].style.display = "block";
        }
        else if(n===1){
            ic2[i].style.display = "block";
        }
        else if(n===2){
            ic3[i].style.display = "block";
        }
        else if(n===3){
            ic4[i].style.display = "block";
        }
        else if(n===4){
            ic5[i].style.display = "block";
        }
        else if(n===5){
            ic6[i].style.display = "block";
        }
        else if(n===6){
            ic7[i].style.display = "block";
        }
        else if(n===7){
            ic8[i].style.display = "block";
        }
        else if(n===8){
            ic9[i].style.display = "block";
        }
        else if(n===9){
            ic10[i].style.display = "block";
        }
        else if(n===10){
            ic11[i].style.display = "block";
        }
        else if(n===11){
            ic12[i].style.display = "block";
        }
        else if(n===12){
            ic13[i].style.display = "block";
        }
    }
    tog[n].style.background = "#59946A";
    tog[n].style.transition = "all .5s";
    sp[n].style.background = "#477654";
    sp[n].style.transition = "all .5s";
    shopCart[n].color = "#fff";
    shopCart[n].style.transition = "all .5s";
}

function prodFuncNone(n){
    for(let i=0;i<ic1.length;i++){
        if(n===0){
            ic1[i].style.display = "none";
        }
        else if(n===1){
            ic2[i].style.display = "none";
        }
        else if(n===2){
            ic3[i].style.display = "none";
        }
        else if(n===3){
            ic4[i].style.display = "none";
        }
        else if(n===4){
            ic5[i].style.display = "none";
        }
        else if(n===5){
            ic6[i].style.display = "none";
        }
        else if(n===6){
            ic7[i].style.display = "none";
        }
        else if(n===7){
            ic8[i].style.display = "none";
        }
        else if(n===8){
            ic9[i].style.display = "none";
        }
        else if(n===9){
            ic10[i].style.display = "none";
        }
        else if(n===10){
            ic11[i].style.display = "none";
        }
        else if(n===11){
            ic12[i].style.display = "none";
        }
        else if(n===12){
            ic13[i].style.display = "none";
        }
    }
    tog[n].style.background = "#fff";
    tog[n].style.transition = "all .5s";
    sp[n].style.background = "#F1F1F2";
    sp[n].style.transition = "all .5s";
    shopCart[n].color = "#000";
    shopCart[n].style.transition = "all .5s";
}