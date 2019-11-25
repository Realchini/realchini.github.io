function valid(form)
{
    var topic = form.topic.value;
    var message = form.message.value;
    var email = form.email.value;
    var phone = form.phone.value;
    var fail = false;
    if(!topic || topic == " ")
        fail = "Вы не ввели тему сообщения";
    else if(!message || message == " ")
        fail = "Вы не ввели сообщение";
    else if(!email || email == " ")
        fail = "Вы не ввели емейл";
    else if(!phone || phone == " ")
        fail = "Вы не ввели номер телефона";
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