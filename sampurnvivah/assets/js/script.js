
window.onscroll=()=>{
    let header = document.querySelector('nav');
    header.classList.toggle('sticky',window.scrollY>100);
}

let sections =document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.mid a');
let subnavLinks = document.querySelectorAll('.navbar-content a');


window.addEventListener('scroll', function() {

sections.forEach(sec =>{
    let top =window.scrollY;
    let offset = sec.offsetTop-100;
    let height = sec.offsetHeight;
    let id =sec.getAttribute('id');
    console.log(id);
    if(top >=  offset && top < offset + height){
        // active navbar links
        navLinks.forEach(links=>{
            links.classList.remove('active');
            document.querySelector('.mid a[href*='+ id +']').classList.add('active');
        });

        subnavLinks.forEach(slinks=>{
            slinks.classList.remove('sactive');
            document.querySelector('.navbar-content a[href*='+ id +']').classList.add('sactive');
        });
    }
});
})

const menuActive =()=>{
    $(".menu-bar span:nth-child(1)").toggleClass("menu-active-1");
    $(".menu-bar span:nth-child(2)").toggleClass("menu-active-2");
    $(".sub-navbar").toggleClass("sub-navbar-active")
}
$(".login").click(()=>{
    $(".login-form").toggleClass("login-form-active");
})

$(".login-back").click(()=>{
    $(".login-form").toggleClass("login-form-active");
})

$(".QrCode").click(()=>{
    $(".QrCode-form").toggleClass("QrCode-form-active");
})

$(".QrCode-back").click(()=>{
    $(".QrCode-form").toggleClass("QrCode-form-active");
})

const formStart =()=>{
    $(".form-field-1").toggleClass("form-field-active-2");
    $(".form-field-2").toggleClass("form-field-active-1");
}

const submitMemberData =()=>{
    $(".submit-form").addClass("submit-form-active");
   
    setTimeout(confirmationAnimation ,2000);
}

const confirmationAnimation =()=>{
    $(".confirmation").addClass("paused");
    $(".confirmation").addClass("confirmation-active");
    $(".submit-form i").show()
    $(".submit-msg").show()
    setTimeout(completeSubmitData ,1000);
}

const completeSubmitData =()=>{
    $(".submit-form").removeClass("submit-form-active");
    $(".confirmation").removeClass("paused");
    $(".confirmation").removeClass("confirmation-active");
    $(".submit-form i").hide()
    $(".submit-msg").hide()
}