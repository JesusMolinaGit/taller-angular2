(function(angular) {

  angular.module('app').component('headerCards', {
    templateUrl:  'app/components/commons/header/header-cards-template.html',
    controller: ['$state', headerCards],
    controllerAs: 'headerCards'
  });

  function headerCards($state) {
    var vm = this;

    vm.goToMain = function() {
      $state.go('main');
    };
  }

})(angular);