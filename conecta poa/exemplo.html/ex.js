
const carrossel = document.getElementById('carrossel');
const direita = document.querySelector('.direita');
const esquerda = document.querySelector('.esquerda');
 
direita.addEventListener('click', () => {
  carrossel.scrollBy({ left: 300, behavior: 'smooth' });
});
 
esquerda.addEventListener('click', () => {
  carrossel.scrollBy({ left: -300, behavior: 'smooth' });
});
