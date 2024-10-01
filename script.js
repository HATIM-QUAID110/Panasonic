document.querySelector('.read-more').addEventListener('click', function() {
  document.querySelector('.card.active').classList.add('flipped');
});

document.querySelector('.back-btn').addEventListener('click', function() {
  document.querySelector('.card.active').classList.remove('flipped');
});
