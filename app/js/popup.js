var myModule = (function(){

  //инициализация метода
  var init = function () {
    console.log("Workin from popup.js!");
    _setUpListners();
  };

  //отслеживание событий
  var _setUpListners = function() {
      $('#my-popup').bind('click',_showPop);
    $('.input-file__element').on('change', _changeNameFile);
  };

  //работа с модальным окном
  var _showPop = function(e){
    e.preventDefault(); // отменяет стандартное поведение елемента

    var divPopup =$('#element_to_pop_up'),
        form = divPopup.find('.form');

    divPopup.bPopup({
        speed: 650,
        transition: 'slideIn',
        transitionClose: 'slideBack',
        modalColor: '#696662',
        onClose: function() {
          _clearFormPopUp(form);
        }
    });
  };
  //изменение имя файла в отображении
  var _changeNameFile = function () {

   var $this = $(this),
          val =$this.val().slice(12),
          fileNameField = $('.input-file-name');
          fileNameField.text(val);

    if (val=="") {
      fileNameField.text("Загрузите изображение");
    };
  };
  var _clearFormPopUp = function (form) {
    var
      elements =form.find('input,textarea');
      elements.trigger('hideTooltip').removeClass('error');
      $('#add-new-project')[0].reset();
      form.find('.error-mes').hide();
      form.find('.success-mes').hide();
  };
  //публичные методы и то что возвращает модуль
  return {
        init:init
  }
})();

myModule.init();

