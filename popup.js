var x = $('a').find('span').filter(':contains("Like")');
console.log(x);
var num_buttons = x.length;
for(var i = 0; i < num_buttons; i++)
{
    x[i].remove();
}

var y = $('.UFILikeIcon');

num_buttons = y.length;

for(var j = 0; j < num_buttons; j++)
{
    y[j].remove();
}


var z = $('.UFILikeLink');

num_buttons = z.length;

for(var k = 0; k < num_buttons; k++)
{
    z[k].remove();
}



    
function removeLikeIcons()
{
    $(document).on('DOMNodeInserted', function(e)
    {
    	console.log("hi")
    	console.log(e);
    	console.log(e.target)
    	console.log(e.target.className)

    	var element = e.target.find('.UFILikeIcon');
    	if(element)
    	{
    		element.remove()
    	}
    });
}


function respondToNewElements()
{
    removeLikeIcons();

}

respondToNewElements();




function removeLikeButtons()
{
    var likeButtons = $('a').find('span').filter(':contains("Like")');
    var numButtons = likeButtons.length;

    for (var k = 0; k < numButtons; k++)
    {
        $(document).on(likeButtons[k].attr('class'), function(e)
        {
        	console.log(e)
        });
    }
}
