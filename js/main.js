var modalfadein = function()
	{ $('.modal').fadeIn() ;}

var modalfadeout = function()
	{ $('.modal').fadeOut();}

var adderror = function()
	{ $('input').addClass("error");}

var removeerror = function()
	{$('input').removeClass("error");}

$('.signin').on("click", modalfadein );

$('.close, .modal').on("click", modalfadeout );

$('.submit').on("click", adderror );

$('input').on("click", removeerror );

$('.getstarted').on("click", function(event){
  event.stopPropagation();}
);
    