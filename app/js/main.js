var myModule = (function(){


  var init = function () {
    _setUpListners();
    //то, что должно произойти сразу
  };

  var _setUpListners = function() {
    $('#my-popup').bind('click',_showPop);
    $('.input-file__element').on('change', _changeNameFile);
    $('#add-new-project').on('submit', _addProject); //добавление проекта
    //прослушка событий
  };

  var _showPop = function(e){
      e.preventDefault(); // отменяет стандартное поведение елемента
      var divPopup =$('#element_to_pop_up'),
      form = divPopup.find('.form');
      divPopup.bPopup({
          speed: 650,
          transition: 'slideIn',
          transitionClose: 'slideBack',
          modalColor: '#696662',
          onClose: function(){
            form.find('.server-mes').text('').hide();
          }
        });
  };


  var _changeNameFile = function () {
   var $this = $(this),
          val =$this.val().slice(12),
          fileNameField = $('.input-file-name');
          fileNameField.text(val);
    if(val=="") {fileNameField.text("Загрузите изображение");}
  };

  var _addProject = function (e) {
     e.preventDefault();
     var form = $(this),
         url ='add_project.php',
         myServerGiveMeAnAnswer = _ajaxForm(form,url);
 
         myServerGiveMeAnAnswer.done(function(ans) {
              console.log(ans.status);
              if (ans.status === "OK"){
                 form.find('.success-mes').text(ans.text).show(); 
                 form.find('.error-mes').hide();
              }else
              {
                form.find('.error-mes').text(ans.text).show();
                form.find('.success-mes').hide();
              }
            })
    };

  var _ajaxForm = function (form, url) {

    // if (!valid) retunr false;

    var data = form.serialize(),
        result = $.ajax({
                 url: url,
                 type: 'POST',
                 dataType: 'json',
                 data: data,
                 }).fail(function(ans) {
                 console.log('Проблемы в PHP');
                 form.find('.error-mes').text('На сервере произошла ошибка').show();
                 form.find('.success-mes').hide();
                 });
      
          return result;
  };

  return {
    init:init
  }
})();

myModule.init();

