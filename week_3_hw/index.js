//Have a conversation with yourself!
// 1. Create a click event on the addMessage button
// 2. Inside the click event capture the input value of message
// 3. Append the message to conversation
// 4. Clear the input after the user has added a message

$('#addMessage').on('click', function() {
    $('#message').css('border', '1px solid #ced4da');
    $('#message').attr('placeholder', 'Send message');
    var conversation = $('#message').val();
    if (conversation !== '') {
        $('#conversation').append('<li class="list-group-item">' + conversation + '</li>');
    } else {
        $('#message').attr('placeholder', 'Please add a message');
        $('#message').css('border', '1px solid red');
    };
    $('#message').val('');
   

});





// BONUS
// *Bonus* Can you add the some "saved" messaged as an array and append them to the page via the Array on page load?
// *Bonus 2* Can you make it so that the user can not submit the input if there is an empty message?
