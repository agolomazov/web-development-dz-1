var myModule = (function(){


  var init = function () {
    _setUpListners();
    //то, что должно произойти сразу
  };



  var _setUpListners = function() {
    $('#my-popup').bind('click',_showPop);
    $('.input-file__element').on('change', _changeNameFile);
    //прослушка событий
  };



  var _showPop = function(e){
      e.preventDefault(); // отменяет стандартное поведение елемента
      $('#element_to_pop_up').bPopup({
          speed: 650,
          transition: 'slideIn',
          transitionClose: 'slideBack',
          modalColor: '#696662'
        });
  };



  var _changeNameFile = function () {
   var $this = $(this),
          val =$this.val().slice(12),
          fileNameField = $('.input-file-name');
          fileNameField.text(val);
    if(val=="") {fileNameField.text("Загрузите изображение");}
  };



  return {
    init: init
  }

})();

myModule.init();

