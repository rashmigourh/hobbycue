//for menubar
let menuBar=document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar');

menuBar.addEventListener("click",()=>{
    menuBar.classList.toggle('fa-times');
    navbar.classList.toggle('active');

})

// dropdown
let heading=document.getElementById('heading');
let dropdown=document.getElementById('dropdown');

heading.addEventListener("click",()=>{
    dropdown.classList.toggle('active');
})

// form-slider
var x=document.getElementById("sigin");
        var y=document.getElementById("joinIn");
        var z=document.getElementById("btn");

        function joinIn(){
            x.style.left="-600px"
            y.style.left="50px"
            z.style.left="110px"
        }
        function sigin(){
            x.style.left="50px"
            y.style.left="700px"
            z.style.left="0px"
        }

// login and signin eye visibility
function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password-log');
    var eyeIcon = document.querySelector('.eye-icon');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        //eye open 
        eyeIcon.innerHTML ='<i class="fa-solid fa-eye" ></i>';
    } else {
        passwordInput.type = 'password';
        //eye close
        eyeIcon.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    }
}
