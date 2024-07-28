const wrapper=document.getElementsByClassName("wrapper");
const loginLink=document.querySelector(".login-link");
const registerLink=document.querySelector(".register-link");
const close=document.querySelector(".close");
const mobile=document.getElementById("mobile");
const login=document.getElementsByClassName("btn-login");
const on=document.querySelector(".on");
const off=document.querySelector(".off");
const sidebar=document.querySelector(".sidebar");
close.addEventListener("click",()=>{
    wrapper[0].classList.remove("hidden");
})
registerLink.addEventListener("click",()=>{
    wrapper[0].classList.add("active");
})
loginLink.addEventListener("click",()=>{
    wrapper[0].classList.remove("active");
})
login[0].addEventListener("click",()=>{
    wrapper[0].classList.add("hidden");
    wrapper[0].classList.remove("active");
})
login[1].addEventListener("click",()=>{
    wrapper[0].classList.add("hidden");
    wrapper[0].classList.remove("active");
    off.classList.add("hidden");
    on.classList.remove("hidden");
    sidebar.classList.remove("show");
})
on.addEventListener("click",()=>{
    on.classList.add("hidden");
    off.classList.remove("hidden");
    sidebar.classList.add("show");
})
off.addEventListener("click",()=>{
    off.classList.add("hidden");
    on.classList.remove("hidden");
    sidebar.classList.remove("show");
})