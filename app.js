$(document).ready(function() {

	var image = '<span id="xout">delete.png</span>';

	$('#add').click(function(){
		inputHandler();
	})

	$('input#new-item, input#quantity').keyup(function (e) { 
	    var key = e.which; 
	    if(key == 13) 
    		{
		inputHandler();
           }
	})
	
     $('.choice').click(function(){
		var selval = $(this).text();
		document.getElementById('new-item').value = selval;
	})
	
	function addItem(text, quantity) {
		jQuery('<div/>', {
			class: 'list-item',
			text: text + ' (' + quantity + ')',
			}).appendTo($('.list'))
		.css('display', 'inline-block');
	}

 	function inputHandler() {
	
		
		var txtbox = document.getElementById('new-item');
		var txtval = txtbox.value;
		var quanbox = document.getElementById('quantity');
		var quanval = quanbox.value;
		if(!$.trim($('#new-item').val())) {
			alert('Please enter text to add to the list');
		} else {
			addItem(txtval,quanval);
			document.getElementById('new-item').value = '';
			document.getElementById('quantity').value = '1';
			$("input[type='text']:first").select();
		};
	}


	
	$('.list').on('click','.list-item' ,function() { 
		$(this).css('background', '#C2D6D6');
 	})

	$(document).on("click", ".list-item", function(){
    		$(this).closest('div').fadeOut(300);
	});

	$("#menu h3").click(function(){
		$("#menu ul ul").slideUp();
		if(!$(this).next().is(":visible"))
		{
			$(this).next().slideDown();
		}
	});
	
});