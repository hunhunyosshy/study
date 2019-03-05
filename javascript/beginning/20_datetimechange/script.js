const addZero = function(day) {
  if(day.length == 1) {
    return '0' + day;
  }
  return day;
}

const getNextDate = function() {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  return date;
}

const displayNextDate = function() {
  const nextDate = getNextDate();
  const fullYear = nextDate.getFullYear() + '';
  const month = addZero((nextDate.getMonth() + 1) + '');
  const date = addZero(nextDate.getDate() + '');
  const output = fullYear + month + date;
  document.getElementById('nextdate').textContent = output;
}