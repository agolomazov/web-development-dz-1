var contactMe = (function(){

	var init = function () {
		_setUpListners();
		
	};

	var _setUpListners = function() {
	 $('#feedback-form').on('submit', _submitForm);
	 $('form').on('reset', validation.clearFormReset);
	};



	var _submitForm = function(e) {

		e.preventDefault();

		var form = $(this),
			url ='contactme.php',
			defObj = _ajaxForm(form, url);

			//что-то будем делать с ответом с сервера defObj
	};

//функция ajax для отправки данных из формы на сервер
  var _ajaxForm = function (form, url) {
	

    if (!validation.validateForm(form)) return false;
    // Если false то код ниже не произодет никгда

    var data = form.serialize(),
        result = $.ajax({
                 url: url,
                 type: 'POST',
                 dataType: 'json',
                 data: data,
                 }).fail(function(ans) {
          
                 form.find('.error-mes').text('На сервере произошла ошибка').show();
                 form.find('.success-mes').hide();
                 });
            
    return result;
  };

	return {
		init: init
	};

})();

contactMe.init();