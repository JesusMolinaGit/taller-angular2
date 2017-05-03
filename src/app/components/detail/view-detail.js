(function(angular) {

  angular.module('app').component('viewDetail', {
    templateUrl:  'app/components/detail/view-detail-template.html',
    controller:  ['$state',viewDetail],
    controllerAs: 'viewDetail',
    bindings: {
      name: '@',
      email: '@',
      avatar: '@'
    }
  });

  function viewDetail($state) {
    var vm = this;
    var name = vm.name;

    vm.goToGame = function(){
      console.log(vm.name);
      $state.go('game');

    };
  }

})(angular);