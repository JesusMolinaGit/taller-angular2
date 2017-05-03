(function(angular) {

  angular.module('app').component('cardsCard', {
    templateUrl:  'app/components/game/cardsCard/cards-card-template.html',
    controller: cardsCard,
    controllerAs: 'cardsCard',
    bindings: {
      itemCard: '<'
    }
  });

  function cardsCard() {
    var vm = this;

    
    vm.volver = function(){
      document.getElementById('matrix').src = "reverso.png";
    }
  }

})(angular);
