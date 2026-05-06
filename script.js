// Mobile Menu Toggle
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

if (toggle) {
    toggle.onclick = () => {
        nav.classList.toggle("active");
    };
}

// Notifications
const data = [
    "New scheme launched",
    "Exam results published",
    "Public notice released"
];

const list = document.getElementById("notifications");

if (list) {
    data.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
}

// Contact Form
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", e => {
        e.preventDefault();
        alert("Form submitted!");
    });
}