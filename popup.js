function removeAll(x)
{
	var num_buttons = x.length;
	for (var i = 0; i < num_buttons; i++)
	{
		x[i].remove();
	}
}

function doEverything()
{
	var x = $('a').find('span').filter(':contains("Like")');
	removeAll(x)

	var y = $('.UFILikeIcon');
	removeAll(y);

	var z = $('.UFILikeLink');
	removeAll(z);
}

function removeNewElements()
{
	doEverything();
    $(document).on('DOMNodeInserted', function(e)
    {
    	doEverything();
    });
}

removeNewElements();
