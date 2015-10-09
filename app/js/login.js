var login = (function(){

	var init = function () {
		_setUpListners();
		console.log("Workin from login.js!");
	};

	var _setUpListners = function() {
	 $('#login').on('submit', _submitForm);
	};

	var _submitForm = function(e) {
		console.log('отправка формы');
		e.preventDefault();

		var form = $(this),
			url ='contactme.php',
			defObj = _ajaxForm(form, url);

			//что-то будем делать с ответом с сервера defObj
	}

//функция ajax для отправки данных из формы на сервер
  var _ajaxForm = function (form, url) {
		console.log('ajax запрос, но с проверкой!');

    if (!validation.validateForm(form)) return false;
    // Если false то код ниже не произодет никгда

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
                 console.log(data);
    return result;
  };

	return {
		init: init
	};

})();

login.init();