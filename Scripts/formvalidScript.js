let email_inp = document.querySelector("#emailinput");
if(email_inp.type=="text")
{
function valid(form)
{
    var topic = form.topic.value;
    var message = form.message.value;
    var email = form.email.value;
    var phone = form.phone.value;
    var email_pattern = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    var phone_pattern = /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/;

    var fail = false;
    if(!topic || topic == " ")
        fail = "Вы не ввели тему сообщения";
    else if(!message || message == " ")
        fail = "Вы не ввели сообщение";
    else if(!email || email == " ")
        fail = "Вы не ввели емейл";
    else if(email_pattern.test(email) == false)
        fail = "Емейл неверного формата";
    else if(!phone || phone == " ")
        fail = "Вы не ввели номер телефона";
    else if(phone_pattern.test(phone) == false)
        fail = "Номер телефона неверного формата";
    if(fail)
        {
            alert(fail);
            return false;
        }
    else
        {
            alert("Готово!");
            window.location = "realchini.github.io/index.html"
            return true;
        }
}
}

/**************/
/*
let email_inp = document.querySelector("#emailinput");
if(email_inp.type=="text")
    {
        function valid(form)
        {
        var email = form.email.value;
        var email_pattern = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

        var fail = false;
        if(!email || email == " ")
            fail = "Введите email";
        else if(email_pattern.test(email) == false)
            fail = "Вы ввели email неверного формата";
    
        if(fail)
            {
                alert(fail);
                return false;
            }
        else
            {
                alert("Отлично! Подарок выслан");
                window.location = "Main.html"
                return true;
            }
        }
    }