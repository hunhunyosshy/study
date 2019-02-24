document.getElementById('form').onsubmit = () => {
  if (Cookies.get('answered') === 'yes') {
    window.alert('回答済です。アンケートの回答は1回のみです');
    return false;
  } else {
    Cookies.set('answered', 'yes', {expires: 7});
  }
};

document.getElementById('remove').onclick = () => {
  Cookies.removed('answered');
}