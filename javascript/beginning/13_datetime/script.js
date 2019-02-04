const now = new Date();
const fullYear = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();
const hour = now.getHours();
const minute = now.getMinutes();
const seconds = now.getSeconds();

const output = fullYear + '/' + month + '/' + date + ' ' + hour + ':' + minute + ':' + seconds;
document.getElementById('time').textContent = output;