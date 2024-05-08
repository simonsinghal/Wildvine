'use strict';
/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
    navElemArr[i].addEventListener("click", function () {
        navbar.classList.toggle("active");
    });
}

/**
 * toggle navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].addEventListener("click", function () {
        navbar.classList.remove("active");
    });
}

/**
 * header active when window scrolled down
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
    window.scrollY >= 50 ? header.classList.add("active")
        : header.classList.remove("active");
});

function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}

// Use GSAP to create a simple animation
gsap.to("#event1", {
    duration: 8,
    x: 200,
    rotate: 360,
    ease: "power2.out"
});

function Donation() {
    window.location.href = 'donation.html';
}

    function submitDonation() {
    const form = document.getElementById('donationForm');
    const amount = form.querySelector('#amount').value;
    const name = form.querySelector('#name').value;
    const email = form.querySelector('#email').value;

    // Validate the form (add more validation as needed)
    // Send donation details to the server (replace with actual backend endpoint)
    fetch('/donate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount, name, email }),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            alert('Donation successful! Thank you for your support.');
            // Optionally, you can redirect the user to a thank you page
            // window.location.href = '/thank-you';
        })
        .catch(error => {
            console.error('There was a problem with the donation:', error);
            alert('There was an error processing your donation. Please try again later.');
        });
}


const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/donate', (req, res) => {
    const { amount, name, email } = req.body;

    // Process the donation (you would integrate with a payment gateway here)
    // For simplicity, just logging the details to the console
    console.log(`Donation Received: ${amount} USD from ${name} (${email})`);

    res.json({ success: true });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

function Events() {
    window.location.href = 'events.html';
}

function submitReview() {
    var username = document.getElementById('username').value;
    var reviewText = document.getElementById('review').value;

    if (username && reviewText) {
        var reviewContainer = document.getElementById('reviews-list');
        var newReview = document.createElement('div');
        newReview.classList.add('review');
        newReview.innerHTML = `
        <img src="images/customer.png" alt="User Avatar">
        <div class="review-content">
            <strong>${username}:</strong> ${reviewText}
        </div>
    `;
        reviewContainer.appendChild(newReview);

        // Clear the form after submission
        document.getElementById('username').value = '';
        document.getElementById('review').value = '';

        // Display "Thank you" message
        var thankYouMessage = document.getElementById('thank-you-message');
        thankYouMessage.textContent = 'Thank you for your review! Your response is appreciated.';
    } else {
        alert('Please enter your name and review before submitting.');
    }
}
function Review() {
    window.location.href = 'review.html';
}