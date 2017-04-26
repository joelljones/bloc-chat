(function() {
    function LoginCtrl($uibModalInstance, $cookies) {
		this.setUsername = function(username) {
			$cookies.put('blocChatCurrentUser', username);
			$uibModalInstance.close();
		};
    }

    angular
        .module('blocChat')
        .controller('LoginCtrl', ['$uibModalInstance', '$cookies', LoginCtrl]);
})();