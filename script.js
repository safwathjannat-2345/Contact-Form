const start = document.querySelector(".get-started");
const first = document.querySelector(".first-section");
const second = document.querySelector(".second-section");
const Thanks=document.querySelector(".ThankYou");
const head=document.getElementById("headline");
start.addEventListener('click', (event) => {
    event.preventDefault();

    const firstInputs = first.querySelectorAll(".inputdata");
    let isBlank = false;
    let targetInput = null;

    firstInputs.forEach(input => {
        if (input.value.trim() === "") {
            isBlank = true;
            if (!targetInput) {
                targetInput = input;
            }
        }
    });

    if (isBlank) {
        alert("Please fill in all fields!");
        targetInput.focus();
        return;
    }

    
    const emailInput = first.querySelector("#user-email");
    const emailValue = emailInput.value.trim();
    
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailPattern.test(emailValue)) {
        alert("Please enter a valid email address!");
        emailInput.focus();
        return;
    }
    
    first.classList.add("hidden");
    second.classList.remove("hidden");
});
const SecondInputs=second.querySelectorAll(".inputdata,.message");
const submit=document.getElementById("submit");
submit.addEventListener('click',(event)=>{

event.preventDefault();
let isBlank=false;
let targetInput=null;
SecondInputs.forEach(inputs=>{
    if(inputs.value.trim()===""){
        isBlank=true;
        if(!targetInput){
        targetInput=inputs;}
    }});
    if(isBlank){
        alert("Please fill in All fields !");
        targetInput.focus();
        return;

    }
    else{
        second.classList.add("hidden");
        Thanks.classList.remove("hidden");
        head.classList.add("hidden");

        
    }
});


