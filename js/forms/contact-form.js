document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#contact-form');
    if (!form) return;

    const submitButton = form.querySelector('button');

    let formStatus = document.querySelector('#form-status');
    if (!formStatus) {
        formStatus = document.createElement('p');
        formStatus.id = 'form-status';
        form.appendChild(formStatus);
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault(); // stop redirect

        submitButton.classList.add('loading');
        submitButton.disabled = true;

        formStatus.textContent = "Sending...";
        formStatus.style.opacity = 1;

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: {
                    Accept: 'application/json'
                }
            });

            if (response.ok) {
                formStatus.textContent = "Enquiry Sent Successfully!";
                formStatus.className = "success";
                form.reset();
            } else {
                formStatus.textContent = "Submission failed. Please try again.";
                formStatus.className = "error";
            }
        } catch (error) {
            console.error(error);
            formStatus.textContent = "Network error. Please try again.";
            formStatus.className = "error";
        } finally {
            submitButton.classList.remove('loading');
            submitButton.disabled = false;

            setTimeout(() => {
                formStatus.style.opacity = 0;
            }, 4000);
        }
    });
})