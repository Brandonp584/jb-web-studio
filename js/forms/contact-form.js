const form = document.querySelector('#contact-form');

if (!form) return;

const formStatus = document.createElement('div');
formStatus.id = 'form-status';
form.style.position = "relative";
form.appendChild(formStatus);

form.addEventListener('submit', async e => {
    e.preventDefault();
    formStatus.textContent = "Sending...";
    formStatus.style.opacity = 1;

    try {
        const response = await fetch(form.ariaDescription, {
            method: 'POST',
            body: new FormData(form),
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            formStatus.textContent = "Message Sent Successfully!";
            formStatus.className = "success";
            form.reset();
            setTimeout(() => (formStatus.style,opacity = 0), 3000);
        }  else {
            formStatus.textContent = "Submission failed.";
            formStatus.className = "error";
        }
    } catch {
        formStatus.textContent = "Network error.";
        formStatus.className = "error";
    }
});