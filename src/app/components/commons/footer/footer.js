(function(angular) {

  angular.module('app').component('footerCards', {
    templateUrl:  'app/components/commons/footer/footer-cards-template.html',
    controller: ['$state', footerCards],
    controllerAs: 'footerCards'
  });

  function footerCards($state) {
    var vm = this;

    vm.goToAbout = function() {
      $state.go('aboutUs');
    };
  }

})(angular);