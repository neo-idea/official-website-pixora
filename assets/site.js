document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('[data-contact-form]');
  if (!form) return;
  form.addEventListener('submit', event => {
    event.preventDefault();
    const subject = encodeURIComponent(form.dataset.subject || 'Pixora support request');
    const body = encodeURIComponent(form.querySelector('textarea').value || '');
    window.location.href = `mailto:support@pixora.app?subject=${subject}&body=${body}`;
  });
});
