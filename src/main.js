$(document).on('ready', function() {

  $('form').submit(function(event) {
    event.preventDefault();

    // this.val(); javascript
    // var form = $(this).val(); //jQuery
    var form = $(this).serialize();
    // var form = $(this).serializeArray();

    console.log(form);

    var email = $('#email').val();
    var password = $('#password').val();

    $('.result').append('<h2>email: ' + email + '</h2>');
    $('.result').append('<h2>password: ' + password + '</h2>');

    console.log(email);
    console.log(password);

  });
});
