jQuery(function($) {
    //connection to socket
    var socket = io.connect();
    var $nameForm = $('#name-form');
    var $duplicateName = $('#duplicate-name');
    var $nameTextBox = $('#name');
    var $usersList = $('#users');
    var $messageForm = $('#send-message');
    var $messageTextBox = $('#message');
    var $messages = $('#messages');

    // function to run when users enter a name and submit
    $nameForm.submit(function(e) {

        // prevent default behavior of submit and refresh
        e.preventDefault();

        // send the new username to the socket
        socket.emit('new user', $nameTextBox.val(), function(data) {
            if (data) {
                $('#name-entry').hide();
                $('#chat').show();
            } else {
                $duplicateName.html('That username is already taken');
            }                  
        });

        $nameTextBox.val('');
    });

    // function to run when the send message form is submitted
    $messageForm.submit (function(e) {
        // prevent the default behavior of submit and refresh
        e.preventDefault();
        // send message to the socket
        socket.emit('send message', $messageTextBox.val());
        // clear out the message text box
        $messageTextBox.val('');
    })
    // update list of users
    socket.on ('usernames', function(data) {
        var usersListHtml = '';
        // loop through array of users
        for ($i = 0; $i < data.length; $i++) {
            usersListHtml += data[$i] + "<br />";
        }
        $usersList.html (usersListHtml);
    });
    socket.on('new message', function(data) {
        $messages.append("<strong>" + data.name + "</strong>: ");
        $messages.append(data.msg);
        $messages.append("<br />");
    });
}); 