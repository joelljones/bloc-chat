(function() {
    function HomeCtrl(Room, Message, $uibModal, $scope, $cookies) {
        this.rooms = Room.all;
		$scope.currentRoom = null;	
		$scope.messages = null;
		
		this.selectRoom = function(room) {
			$scope.currentRoom = room;
			$scope.messages = Message.getByRoomId($scope.currentRoom.$id);
		};
		
        this.addRoom = function() {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                size: 'sm',
                controller: 'ModalCtrl as modal'
            });
        }
		
		this.sendMessage = function() {
			this.newMessage.roomId = this.currentRoom.$id;
			this.newMessage.username = this.currentUser;
			Message.send(this.newMessage);
		}
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$scope', '$cookies', HomeCtrl]);
})();