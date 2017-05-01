(function(angular) {

  angular.module('app').component('viewDetail', {
    templateUrl:  'app/components/detail/view-detail-template.html',
    controller:  ['$state',viewDetail],
    controllerAs: 'viewDetail',
    bindings:{
      avatar: "<",
      name: "<",
      email: "<"
    }
  });

  function viewDetail($state) {
    var vm = this;

  vm.goToGame = function(){

     if(!vm.avatar&&!vm.name&&!vm.email){
        alert("Los campos no pueden estar vacios");
     }else{
       $state.go('game');
     }
      

    };
  }

})(angular);