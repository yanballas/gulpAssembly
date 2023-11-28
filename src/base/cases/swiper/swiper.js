import Swiper from 'swiper';
import { Navigation,  Pagination, EffectFade} from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css';

new Swiper('.container .swiper', {
  loop: true,
  speed: 600,
  autoHeight: true,
  modules: [Navigation, Pagination, EffectFade],
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

  pagination: {
    el: '.container .swiper-pagination',
    clickable: true
  },

  navigation: {
    nextEl: '.container .swiper-button_next',
    prevEl: '.container .swiper-button_prev',
  },
});