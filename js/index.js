const skills_li = document.querySelectorAll(".skill-ul li");
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

for(let i=0; i<skills_li.length; i++) 
{
    let back = ["#96ceb4", "#FFAFAF", "#FFB085", "#F25287", "#92B4EC", "#2F86A6", "#A45D5D"];
    let rand = back[Math.floor(Math.random() * back.length)];
    skills_li[i].style.backgroundColor = rand;
}

hamburger.addEventListener('click', ()=> {
    // add new class when toggle
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', ()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250) {
        header.style.backgroundColor = "#29323c";
    }
    else 
        header.style.backgroundColor = "transparent";
});

menu_item.forEach(item => {
    item.addEventListener('click', ()=>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    })
});