// Contact form — currently opens the visitor's email client with a pre-filled
// message (no backend exists yet). Once the backend is built, replace the
// body of this submit handler with a fetch() POST to the real API endpoint —
// the form markup and validation don't need to change, only this function.

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = {
      firstName: form.firstName.value.trim(),
      lastName: form.lastName.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      sector: form.sector.value,
      message: form.message.value.trim(),
    };

    if (!data.firstName || !data.lastName || !data.email || !data.message) {
      status.textContent = 'Please fill in all required fields.';
      status.className = 'form-status error';
      return;
    }

    // --- TEMPORARY: mailto fallback until the backend exists ---
    const subject = encodeURIComponent(
      `Website Inquiry — ${data.sector || 'General'} — ${data.firstName} ${data.lastName}`
    );
    const body = encodeURIComponent(
      `Name: ${data.firstName} ${data.lastName}\n` +
      `Email: ${data.email}\n` +
      `Phone: ${data.phone || 'Not provided'}\n` +
      `Sector: ${data.sector || 'Not specified'}\n\n` +
      `Message:\n${data.message}`
    );
    window.location.href = `mailto:sinasupplies@outlook.com?subject=${subject}&body=${body}`;

    status.textContent = 'Opening your email client to send this inquiry…';
    status.className = 'form-status success';

    // --- FUTURE: replace the block above with something like:
    // const res = await fetch('/api/inquiries', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data),
    // });
  });
}
