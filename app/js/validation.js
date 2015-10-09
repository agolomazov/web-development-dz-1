var validation = (function(){
	// Инициализирует наш модуль
    var init = function () {
        _setUpListners();
        console.log("Workin from validation.js!");
    };  

   
     // Прослушивает события
    var _setUpListners = function() {
    	$('form').on('keyup', '.error', _removeError);
    };
    var _removeError = function () {
    	$(this).removeClass('error');
    }
    // Создает тултипы
    var _createQtip = function (element, position) {
		// позиция тултипа
		if (position === 'right') {
			position = {
				my: 'left center', 
				at: 'right center'
			};
			}else{
				position = {
					my: 'right center', 
					at: 'left center'				
				};
		};
		//инициализация тултипа
		element.qtip({
			content: {
				text: function() {
					return $(this).attr('qtip-content');
				}
			},
			show: {
				event: 'show',
				effect: function(offset) {
		            $(this).slideDown(100);
		        }
			},
			hide: {
				event: 'keyup hideTooltip',
				effect: function(offset) {
		            $(this).slideUp(100); 
		        }

			},
			position : position,

			style: {
				classes: 'qtip-rounded qtip-myclass'
			}
		}).trigger('show');
    };

    // Универсальная функция
    var validateForm =  function(form) {
    	console.log('Привет! я в модуле валидации, проверяю форму!');
    	var elements = form.find('input,textarea').not('input[type="file"], input[type="hidden"]'),
    		valid = true;

    	//Пройдемся по всем елементам формы
    	$.each(elements, function(index, val){
    		var element = $(val),
    			val = element.val(),
    			pos = element.attr('qtip-position');
    		console.log(element,val,pos);
	    	if (val.length === 0) {
	    	 	_createQtip(element,pos);
	    	 	element.addClass('error');
	    		valid = false;
	    		
	    	}
    	});
    	return valid;
    };

    var clearFormReset = function (form) {
    	console.log('я очищаю форму');
		var 
			form = $(this),
			elements =form.find('input,textarea');
			elements.trigger('hideTooltip').removeClass('error');
	};

     // Возвращает объект (публичные методы)
    return {
        init: init,
        validateForm: validateForm,
        clearFormReset: clearFormReset
    };

})();

validation.init();
