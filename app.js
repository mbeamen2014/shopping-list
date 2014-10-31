$(document).ready(function() {

	$('#add').click(function(){
		var txtbox = document.getElementById('new-item');
		var txtval = txtbox.value;
		var quanbox = document.getElementById('quantity');
		var quanval = quanbox.value;
		if(!$.trim($('#new-item').val())) {
			alert('Please enter text to add to the list');
		} else {
			addItem(txtval, quanval);
			document.getElementById('new-item').value = '';
			document.getElementById('quantity').value = '1';
		};
	})
	
	function addItem(text, quantity) {
		jQuery('<div/>', {
			class: 'list-item',
			text: text,
			}).appendTo($('.list'))
		jQuery('<div/>', {
			class: 'list-num',
			text: quantity,
			}).appendTo($('.list'))					
		.fadeIn()	
		.css('display', 'inline-block');
	}

     $( "#remove" ).click(function() { 
		var text = document.getElementById('list-item');
		var textval = text.value;
		var num = document.getElementById('list-num');
		var numval = num.value;
		removeItem(textval, numval);		
 
	});

	function removeItem(text,number)
	{
	$( "div.list-item" ).remove( ":contains('Milk')" );
	$( "div.list-num" ).remove( ":contains('1')" );
	}


	$('input#new-item, input#quantity').keyup(function (e) { 
    var key = e.which; 
	if(key == 13) 
    {
        var txtbox = document.getElementById('new-item');
		var txtval = txtbox.value;
		var quanbox = document.getElementById('quantity');
		var quanval = quanbox.value;
		
		if(!$.trim($('#new-item').val())) {
			alert('Please enter text to add to the list');
		} 
		else {
			addItem(txtval, quanval);
			document.getElementById('new-item').value = '';
			document.getElementById('quantity').value = '1';
		};
    }
});



	
});