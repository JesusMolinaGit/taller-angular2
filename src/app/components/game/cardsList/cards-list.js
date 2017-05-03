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

    vm.$onInit = function() {
      vm.allCards = cardsFactory.getAllCards();
    };
    vm.cambiar = function(){
      document.getElementById('matrix').src = "app/styles/imgs/oros5.jpg";
    };
  }

})(angular);
