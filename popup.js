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


