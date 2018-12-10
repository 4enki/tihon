$(document).ready(function() {

  $('#gallery_content').easytabs({
    updateHash: false,
    tabActiveClass: 'is-active',
    tabs: '.gallery-tabs > li'
  });

  $('.zoom-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
    tLoading: 'Загрузка фотографии #%curr%...',
    tClose: 'Свернуть (Esc)',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1],
      tPrev: '← Предыдущий',
      tNext: 'Следующий →',
      tCounter: '%curr% из %total%'
    },
    image: {
      verticalFit: true,
      tError: '<a href="%url%">Фотография #%curr%</a> незагрузилась :о(',
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
      opener: function(element) {
        return element.find('img');
      }
    }
  });

});
