$(function(){
	'use-strict';

	// side nav left
	$(".side-nav-left").sideNav({

		edge: 'left',
		closeOnClick: false

	});

	// slider
	$('.slider').slider({full_width: true});

	// tabs
	$('ul.tabs').tabs();

	

});

function AddCart(product, qtd, value, position)
	{
		localStorage.setItem("product" + position, product);
		localStorage.setItem("qtd" + position, qtd);
		value = value * qtd;
		localStorage.setItem("value" + position, value);
		alert("Product added to cart!");
	}

	var total = 0; 
	var i = 0;    
	var value = 0; 
	
	for(i=1; i<=99; i++) // Loop up to 99 products registered in localStorage
	{
		var prod = localStorage.getItem("product" + i + "");  
		if(prod != null) 
		{	
			// displays the list of itens
			document.getElementById("itens").innerHTML += localStorage.getItem("qtd" + i) + " x ";
			document.getElementById("itens").innerHTML += localStorage.getItem("product" + i);
			document.getElementById("itens").innerHTML += " ";
			document.getElementById("itens").innerHTML += "£: " + localStorage.getItem("value" + i) + "<hr>";
			
			// calculates the total
			value = parseFloat(localStorage.getItem("value" + i)); parseFloat()
			total = (total + value); 
		}
	} 
	// Displays the total
	document.getElementById("total").innerHTML = total.toFixed(2);

	// Alert message when you click buy
	function checkout() {
		alert("Your products will be sent as soon as possible. Thank you for buying with T&Tfootbaal!");
	  }