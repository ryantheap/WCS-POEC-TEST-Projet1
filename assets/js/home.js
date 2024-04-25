const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    contactForm.innerText = 'Votre message à bien été envoyé. Merci !'
})