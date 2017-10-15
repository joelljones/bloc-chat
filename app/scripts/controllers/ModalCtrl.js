(function() {
  function ModalCtrl(Room, $uibModalInstance, $cookies) {
    this.cancel = function() {
      $uibModalInstance.dismiss();
    };

    this.createRoom = function() {
      Room.add(this.newRoom);
      $uibModalInstance.close();
    };
  }

  angular
    .module('blocChat')
    .controller('ModalCtrl', ['Room', '$uibModalInstance', '$cookies', ModalCtrl]);
})();
