const menu = document.getElementsByClassName("menu");
const bar1 = document.getElementsByClassName('bar1');
const bar2 = document.getElementsByClassName('bar2');

function expandMenu(){
    if(menu[0].style.width=="70px"){
        menu[0].style.width="1400px";
        menu[0].style.transition = "width 1s";
        bar1[0].style.transform = "rotate(45deg) translateY(5px) translateX(5px)";
        bar2[0].style.width = '29px';
        bar2[0].style.transform = 'none';
        bar2[0].style.transform = 'rotate(-45deg)';
        menu[0].style.overflow = 'visible';
    }
    else{
        menu[0].style.width = "70px";
        bar1[0].style.transform = "rotate(0deg) translateY(0px) translateX(0px)";
        bar2[0].style.width = '20.3px';
        bar2[0].style.transform = 'translateX(8.7px)';
        bar2[0].style.transform = 'rotate(0deg)';
        addEventListener('mouseover',function(){
            bar2[0].style.transform = 'translateX 8.7px';
        });
    }
}
