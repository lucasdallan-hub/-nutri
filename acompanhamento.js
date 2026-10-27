const habits = [...document.querySelectorAll('input[name="habit"]')];
const count = document.querySelector('#habit-count');
const progress = document.querySelector('#habit-progress');
const message = document.querySelector('#habit-message');
const messages = [
  'Comece pelo que foi possível hoje.',
  'Um cuidado já é um começo. Reconheça esse momento.',
  'Pequenas escolhas também merecem ser reconhecidas.',
  'Observe como esses momentos fizeram você se sentir.',
  'Que bom reservar espaço para você. Amanhã pode ser diferente, e tudo bem.'
];
function updateHabits() {
  const total = habits.filter(habit => habit.checked).length;
  count.textContent = `${total} de 4 cuidados percebidos`;
  progress.value = total;
  message.textContent = messages[total];
}
habits.forEach(habit => habit.addEventListener('change', updateHabits));
document.querySelector('#reset-habits').addEventListener('click', () => {
  habits.forEach(habit => { habit.checked = false; });
  updateHabits();
});
updateHabits();
