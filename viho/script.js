const bars = document.querySelector(".bars");
const navUser = document.querySelector(".nav-user");
const navItems = document.querySelector(".nav-items");
const navigation = document.querySelector(".navigation");
const transform = document.querySelectorAll(".fa-chevron-right");

$(function(){
    $("#item1").click(function(){
        $("#panel1").slideToggle("3000");
        // $(".fa-chevron-right").toggle("transform");
        transform[0].classList.toggle("transform");
    });
    $("#item2").click(function(){
        $("#panel2").slideToggle("3000");
        transform[1].classList.toggle("transform");
    });
    $("#item3").click(function(){
        $("#panel3").slideToggle("3000");
        transform[2].classList.toggle("transform");
    });
    $("#item4").click(function(){
        $("#panel4").slideToggle("3000");
        transform[3].classList.toggle("transform");
    });
    $("#item5").click(function(){
        $("#panel5").slideToggle("3000");
        transform[4].classList.toggle("transform");
    });
    $("#item6").click(function(){
        $("#panel6").slideToggle("3000");
        transform[5].classList.toggle("transform");
    });
    $("#item7").click(function(){
        $("#panel7").slideToggle("3000");
        transform[6].classList.toggle("transform");
    });
    $("#item8").click(function(){
        $("#panel8").slideToggle("3000");
        transform[7].classList.toggle("transform");
    });
    $("#item9").click(function(){
        $("#panel9").slideToggle("3000");
        transform[8].classList.toggle("transform");
    });
    $("#item10").click(function(){
        $("#panel10").slideToggle("3000");
        transform[9].classList.toggle("transform");
    });
});



function openMenu(){
    bars.classList.toggle("active");
    navUser.classList.toggle("active");
    navItems.classList.toggle("active");
    navigation.classList.toggle("active");
}
bars.addEventListener("click",openMenu);