$( function(){
	console.log("Workin from main.js!");

   $('#my-popup').bind('click', function(e) {

                e.preventDefault();

               
                // $('#element_to_pop_up').bPopup();
                     $('#element_to_pop_up').bPopup({
           speed: 650,
            transition: 'slideIn',
	    transitionClose: 'slideBack',
            modalColor: '#696662'
        });
            });


    $('.input-file__element').on('change', function(){
      var $this = $(this),
          val =$this.val().slice(12),
          fileNameField = $('.input-file-name');
          fileNameField.text(val);
          if(val=="") {
            fileNameField.text("Загрузите изображение");
          }
                 });

});

