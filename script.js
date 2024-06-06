function cpcLink() {
    window.open("https://web.facebook.com/cpcofficial2005");
}

function fbLink() {
    window.open("https://web.facebook.com/jersonjay.bonghanoy");
}

function instaLink() {
    window.open("https://www.instagram.com/jerson_jay18/");
}

function githubLink() {
    window.open("https://github.com/MrKabado");
}

function handleSubmit() {
    let name = document.getElementById("contact-name").value;
    let email = document.getElementById("contact-email").value;

    if (name && email) {
        document.getElementById("Loading-Text").innerHTML = 'Loading.. Please wait a minute. Thank you <i class="fa-solid fa-hands-praying"></i>';
        setTimeout(function() {
            document.getElementById("contact-form").submit();
        }, 500);
    }
}

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, event) {
    for (var tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (var tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
