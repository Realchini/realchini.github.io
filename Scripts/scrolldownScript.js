let flag = false;

document.onkeydown = fuction(event)
{
    if(event.code == 'AltLeft') flag = true;
    if (event.code == 'KeyN' && flag)
        {
            flag = false;
            console.log('it works!');
        }
}