let flag = false;

document.onkeydown = function(event)
{
    console.log(event);
}

document.onkeydown = function(event)
{
    if(event.code == 'ControlLeft') flag = true;
    if (event.code == 'ArrowUp' && flag)
        {
            flag = false;
            console.log(event);
            console.log('it works!');
            window.scrollTo(0,0);
        }
}
