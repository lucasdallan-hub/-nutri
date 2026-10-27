const form = document.querySelector('#contact-form');
const result = document.querySelector('#message-result');
const message = document.querySelector('#prepared-message');
const copyButton = document.querySelector('#copy-message');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('#name').value.trim();
  if (!name) {
    document.querySelector('#name').setCustomValidity('Informe seu primeiro nome.');
    document.querySelector('#name').reportValidity();
    return;
  }
  message.textContent = `Olá! Meu nome é ${name} e gostaria de saber mais sobre o acompanhamento nutricional. Meu interesse é: ${document.querySelector('#interest').value.toLowerCase()}. Como funciona o agendamento?`;
  result.hidden = false;
  copyButton.textContent = 'Copiar mensagem ↗';
  result.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'nearest' });
});
document.querySelector('#name').addEventListener('input', (event) => event.target.setCustomValidity(''));
copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(message.textContent);
    copyButton.textContent = 'Mensagem copiada ✓';
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(message);
    selection.removeAllRanges();
    selection.addRange(range);
    copyButton.textContent = 'Texto selecionado. Use a opção copiar.';
  }
});
