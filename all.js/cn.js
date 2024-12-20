// JavaScript to toggle the navigation menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px";
    }
}

// scripts.js

// Initialize the map
function initMap() {
    const mapOptions = {
        center: { lat: 40.712776, lng: -74.005974 }, // Coordinates for New York City
        zoom: 14,
        mapTypeId: 'roadmap',
    };

    const map = new google.maps.Map(document.getElementById("map"), mapOptions);

    const marker = new google.maps.Marker({
        position: mapOptions.center,
        map: map,
        title: "Our Location",
    });
}

// Form submission handler (for demo purposes)
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (name && email && message) {
        alert('Form submitted successfully!');
        // Reset the form
        event.target.reset();
    } else {
        alert('Please fill out all fields.');
    }
});
