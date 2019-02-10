document.querySelector('.search_btn').addEventListener('click', () => {
  window.location = '/search/' + document.querySelector('.search_bar').value;
});
