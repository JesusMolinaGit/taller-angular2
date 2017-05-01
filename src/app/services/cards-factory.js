(function(angular) {

  angular.module('app').factory('cardsFactory', [cardsFactory]);

  function cardsFactory() {
    var module = {};
    var self = module;

   module.allCards = [
        {id: 0, img: 'reverso.png'},
        {id: 1, img: 'reverso.png'},
        {id: 2, img: 'reverso.png'},
        {id: 3, img: 'reverso.png'},
        {id: 4, img: 'reverso.png'},
        {id: 5, img: 'reverso.png'},
        {id: 6, img: 'reverso.png'},
        {id: 7, img: 'reverso.png'}
    ];

    module.getAllCards = function() {
        return self.allCards;
    };

    return module;
  };

})(angular);


