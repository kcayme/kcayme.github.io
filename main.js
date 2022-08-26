const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".toggle-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const toTop = document.querySelector(".to-top")
menuBtn.onclick = ()=>{
    menu.classList.add("active");
    menuBtn.classList.add("hide");
    cancelBtn.classList.add("show");
    body.classList.add("disabledScroll");
}
cancelBtn.onclick = ()=>{
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
    cancelBtn.classList.remove("show");
    body.classList.remove("disabledScroll");
}

window.onscroll = ()=>{
    if(this.scrollY > 20) {
        navbar.classList.add("sticky");
        toTop.classList.add("show");
    }
    else{
        navbar.classList.remove("sticky");
        toTop.classList.remove("show")
    } 
}