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



});

