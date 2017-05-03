'use strict';

(function(angular) {
  /* Declaramos el módulo e inyectamos el router */
  // https://github.com/angular-ui/ui-router
  // npm install --save angular-ui-router
  var dependenciasProyecto = ['ui.router'];

  angular.module('app', dependenciasProyecto);

  /* Definimos la configuración del proyecto durante la fase config */
  /* Necesitamos inyectar algunos "providers" del router */
   angular.module('app').config(['$stateProvider', '$urlRouterProvider',  appConfig]);

  function appConfig($stateProvider, $urlRouterProvider) {
    var main = {
      name: 'main',
      url: '/main',
      template: '<view-main></view-main>'
    };

    var detail = {
      name: 'detail',
      url: '/detail',
      template: '<view-detail></view-detail>'
    };
    var game = {
      name: 'game',
      url: '/game',
      template: '<cards-list></cards-list>'
    };

    var about = {
      name:'aboutUs',
      url: '/aboutUs',
      template: '<h3 style="text-align:center">About Us: work in progress</h3>'
    };

    $stateProvider.state(main);
    $stateProvider.state(detail);
    $stateProvider.state(about);
    $stateProvider.state(game);
  
    /* Definimos una ruta por defecto: */
    $urlRouterProvider.otherwise('/main');
  }

})(angular);