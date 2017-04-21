(function() {
    function HomeCtrl(Room, $uibModal, $scope, Message) {
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
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', '$scope', 'Message', HomeCtrl]);
})();