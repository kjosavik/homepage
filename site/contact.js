const emailAddress = document.querySelector('#email-address');
const emailStatus = document.querySelector('#email-status');
const contactEmail = atob('ZXJpa0Bram9zYXZpay5kZXY=');

emailAddress.textContent = contactEmail;
document.querySelector('#open-email').href = `mailto:${contactEmail}`;
document.querySelector('#email-contact').hidden = false;

document.querySelector('#copy-email').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(contactEmail);
    emailStatus.textContent = 'Email address copied.';
  } catch {
    const selection = window.getSelection();
    if (selection) {
      const range = document.createRange();
      range.selectNodeContents(emailAddress);
      selection.removeAllRanges();
      selection.addRange(range);
    }
    emailStatus.textContent = 'Could not copy automatically. Copy the address manually.';
  }
});
