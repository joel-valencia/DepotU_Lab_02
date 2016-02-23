var main = function() {


    $('#send').click(function() {
        if ($('#name').val() == "" || $('#email').val() == "" || $('#message').val() == "") {
            alert("Please fill out all fields.");
        }
    });


}

$(document).ready(main);