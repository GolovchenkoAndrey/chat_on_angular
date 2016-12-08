function chatCtrl(ChatService) {
    var vm = this;

    vm.messages = ChatService.getMessages();
        
        vm.sendMessage = function() {
            var message = {
                text: vm.newMessage 
            }
            ChatService.sendMessage(message)
            vm.newMessage = '';
        };
}

angular.
    module('cbsChat').
    controller('chatCtrl', ['ChatService', chatCtrl]);