const form = document.querySelector('#contact-form');
const result = document.querySelector('#message-result');
const message = document.querySelector('#prepared-message');
const copyButton = document.querySelector('#copy-message');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('#name').value.trim();
  message.textContent = `Olá! ${name ? `Meu nome é ${name}. ` : ''}Gostaria de saber mais sobre o acompanhamento nutricional. Meu interesse é: ${document.querySelector('#interest').value.toLowerCase()}. Quais são os valores, modalidades de atendimento e horários disponíveis?`;
  result.hidden = false;
  copyButton.textContent = 'Copiar mensagem ↗';
  result.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'nearest' });
});
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
