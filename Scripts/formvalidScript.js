function valid(form)
{
    var topic = form.topic.value;
    var fail = false;
    if(!topic || topic == " ")
        fail = "Вы не ввели тему сообщения";
    if(fail)
        {
            alert(fail);
            return false;
        }
    else
        {
            return true;
        }
}