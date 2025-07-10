/* eslint-disable linebreak-style */
// Smooth scroll for 'Learn More' button on Home page
document.querySelector('.btn')?.addEventListener('click', e => {
  e.preventDefault();
  const target = document.querySelector('#learn-more');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
});

// Contact form validation with messages and modal success popup
const form = document.getElementById('contactForm');
const modal = document.getElementById('successModal');
const closeModalBtn = document.getElementById('closeModal');

form?.addEventListener('submit', function(e) {
  e.preventDefault();

  // Clear previous error messages
  ['nameError', 'emailError', 'messageError'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.style.display = 'none';
      el.textContent = '';
    }
  });

  let valid = true;

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name) {
    const nameError = document.getElementById('nameError');
    if (nameError) {
      nameError.textContent = 'Name is required.';
      nameError.style.display = 'block';
    }
    valid = false;
  }

  if (!email) {
    const emailError = document.getElementById('emailError');
    if (emailError) {
      emailError.textContent = 'Email is required.';
      emailError.style.display = 'block';
    }
    valid = false;
  } else if (!email.includes('@') || !email.includes('.')) {
    const emailError = document.getElementById('emailError');
    if (emailError) {
      emailError.textContent = 'Enter a valid email.';
      emailError.style.display = 'block';
    }
    valid = false;
  }

  if (!message) {
    const messageError = document.getElementById('messageError');
    if (messageError) {
      messageError.textContent = 'Message cannot be empty.';
      messageError.style.display = 'block';
    }
    valid = false;
  }

  if (valid) {
    modal.style.display = 'block';
    form.reset();
  }
});

// Close modal when clicking the 'x'
closeModalBtn?.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when clicking outside the modal content
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
