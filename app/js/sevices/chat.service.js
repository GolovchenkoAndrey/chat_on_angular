function chatService($firebaseArray) {
    var messageRef = firebase.database().ref().child("messages");
    var chat = {};

    chat.getMessages = function() {
        return $firebaseArray(messageRef)
    }

    chat.sendMessage = function(message) {
        chat.getMessages().$add(message);
    }
    
    return chat;
}

angular.
    module('cbsChat').
    factory('ChatService', ['$firebaseArray', chatService])