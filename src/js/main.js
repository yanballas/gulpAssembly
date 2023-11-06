import $ from 'jquery';

window.addEventListener('DOMContentLoaded', () => {
  if (typeof $ !== 'undefined') {
    // jQuery загружен и готов к использованию
    console.log('jQuery is loaded!');
  } else {
    // jQuery не найден
    console.log('jQuery is not loaded!');
  }
})