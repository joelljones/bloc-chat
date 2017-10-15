(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
			// Do something to allow users to set their username
      $uibModal.open({
        templateUrl: '../../templates/login.html',
        controller: 'LoginCtrl as modal',
        keyboard: false,
        backdrop: 'static'
      });
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
