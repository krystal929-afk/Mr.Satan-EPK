const form = document.querySelector("#booking-form");
const status = document.querySelector("#form-status");

if (form && status) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const button = form.querySelector("button[type='submit']");
    const originalText = button.textContent;

    status.textContent = "Sending...";
    button.disabled = true;
    button.textContent = "Sending";

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {
        form.reset();
        status.textContent = "Booking inquiry sent. We’ll get back to you soon.";
      } else {
        const data = await response.json().catch(() => ({}));
        const message = data?.errors?.map((error) => error.message).join(", ");
        status.textContent = message || "Something went wrong. Please email mrsatanplaysgoodmusic@gmail.com directly.";
      }
    } catch (error) {
      status.textContent = "Connection issue. Please email mrsatanplaysgoodmusic@gmail.com directly.";
    } finally {
      button.disabled = false;
      button.textContent = originalText;
    }
  });
}
