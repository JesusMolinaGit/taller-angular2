(function(angular) {

  angular.module('app').component('cardsList', {
    templateUrl:  'app/components/game/cardsList/cards-list-template.html',
    controller: ['cardsFactory', cardsList],
    controllerAs: 'cardsList',
    bindings:{
      id: "<"
    }
  });

  /* Inyectamos aquí y arriba $state */
  function cardsList(cardsFactory) {
    var vm = this;

    vm.toRotate = function(){
      console.log(vm.id);
    }
    vm.$onInit = function() {
      vm.allCards = cardsFactory.getAllCards();
    };
  }

})(angular);
