const form = document.getElementById('booking-form');
const statusEl = document.getElementById('form-status');

if (form && statusEl) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    statusEl.textContent = 'Sending…';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        form.reset();
        statusEl.textContent = 'Inquiry sent. Booking should receive it shortly.';
      } else {
        statusEl.textContent = 'Submission failed. Please try again or email directly.';
      }
    } catch (error) {
      statusEl.textContent = 'Submission failed. Please try again or email directly.';
    }
  });
}
