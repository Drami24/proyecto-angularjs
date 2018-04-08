angular
  .module('app', ['app.articulos'])
  .controller('PrincipalController', function($scope) {})
  .filter('currency', function() {
    return function currency(texto) {
      return parseFloat(texto).formato();
    };
  })
  .filter('vfecha', function() {
    return function vfecha(texto) {
      return texto ? texto.fv() : '';
    };
  });
