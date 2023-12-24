$(document).ready(() => {

    if ($(window).width() >= 789) {
        $('img').attr('src', 'https://raw.githubusercontent.com/Benjihunt97/Newsletter-Email/514d517d695f5773e984aa413dc52a481a9b756c/illustration-sign-up-desktop.svg');
    } else {
        $('img').attr('src', 'https://raw.githubusercontent.com/Benjihunt97/Newsletter-Email/514d517d695f5773e984aa413dc52a481a9b756c/illustration-sign-up-mobile.svg');
    }


    // functon for checking email
    function validateEmail(email) {
        // Regular expression for a basic email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Form submission
    $('#submit-form').click(function (event) {
        // Prevent the form from submitting
        event.preventDefault();

        // Get the entered email value
        const email = $('#email').val();

        // Validate the email
        if (validateEmail(email)) {
            $('.app').hide();
            $('.msg').show();
            $('.user-email').text(email);
        } else {
            $('.error').css('display', 'block');
            $('#email').addClass('error-input');
        }
    });

    $('#email').on('input', function () {
        $('.error').css('display', 'none');
        $('#email').removeClass('error-input');
    });

    // dismiss message
    $('#dismiss-msg').click(() => {
        location.reload();
    });
});
