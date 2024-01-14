var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")
function opentab(tabname){
    for (tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
/* -------- side menu ----*/
var sidemenu=document.getElementById('sidemenu');
function openmenu(){
    sidemenu.style.right="0"
}
function closemenu(){
    sidemenu.style.right="-200px"
}

/*--------mail-----*/

let name = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");

(function(){
    emailjs.init("lHSsKpdCmA9CWHCjH");
})();

let templateParams = {
    to_name: "Sanjay Seb Developer",
    from_name: name.value,
    from_email:email.value,
    message:message.value
}
function submitMessage(){
    templateParams.to_name = "Sanjay Web Developer";
    templateParams.from_name = name.value;
    templateParams.from_email = email.value;
    templateParams.message = message.value;
    emailjs.send("service_ar0fa7r","template_u1jeyxg",templateParams)
    .then(function(){
        showAlert("Message sent successfully!");
        name.value="";
        email.value ="";
        message.value ="";
    }),function(){
        showAlert("Failed to send message!");
    }
}