const countdown = (due) => {
  let now = new Date();
  const rest = due.getTime() - now.getTime();
  const sec = Math.floor(rest / 1000 % 60);
  const min = Math.floor(rest / 1000 / 60) % 60;
  const hours = Math.floor(rest / 1000 / 60 / 60) % 24;
  const days = Math.floor(rest / 1000 / 60 / 60 / 24);
  const count = [days, hours, min, sec];

  return count;
}

const getCoutndownString = () => {
  let goal = new Date();
  goal.setHours(23);
  goal.setMinutes(59);
  goal.setSeconds(59);
  let counter = countdown(goal);
  document.getElementById('hours').textContent = counter[1];
  document.getElementById('min').textContent = counter[2];
  document.getElementById('sec').textContent = counter[3];
  refresh();
}

//即座に実行したい場合は()をつけない
const refresh = () => {
  setTimeout(getCoutndownString, 1000);
}

getCoutndownString();