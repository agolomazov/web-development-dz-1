$( function(){
	console.log("Workin from main.js!");

   $('#my-popup').bind('click', function(e) {

                e.preventDefault();

               
                $('#element_to_pop_up').bPopup();

            });



});

