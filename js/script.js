let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,

});

ScrollReveal().reveal('.home-content, .heading, .skills-header', { origin: 'top'});
ScrollReveal().reveal('.services-container, .portfolio-box', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-info, .contact-info', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .skills-list, .form-control', { origin: 'right'});

const typed = new Typed('.multiple-text', {
    strings: ['Fullstack Developer', 'Content Creator', 'Digital Marketer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

    
const handleSubmit = async (e) => {
e.preventDefault();

const formData = new FormData(e.target);
const formObject = Object.fromEntries(formData.entries()); 

try {
const response = await fetch("https://formspree.io/f/xrbeyopg", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",  
    "Accept": "application/json",
    },
    body: JSON.stringify(formObject), 
});

if (response.ok) {
    alert("Message sent successfully!");
    e.target.reset(); 
} else {
    alert("Failed to send message.");
}
} catch (error) {
console.error("Error sending message:", error);
alert("An error occurred. Please try again.");
}
};



