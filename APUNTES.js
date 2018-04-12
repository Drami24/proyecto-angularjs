APUNTES ANGULARJS

// carpeta vistas
		// archivo.view.html

	// EJEMPLO DE MODULO
	angular.module('almacenApp',['ngRoute', 'ngSorage', 'artApp'])
	.config(function($routeProvider,$locationProvider){
	})
	.controller('mainCtrl'), function($scope, $http)

		// DIFERENCIA ENTRE DIRECTIVA Y COMPONENTE
		// DIRECTIVA trozo de html que le meto a mi pagina
			// una directiva pertenece a un controlador
		// COMPONENTE trozo de html que le meto a mi pagina con controlador incluído


		// para usar esta directiva ponemos en el html <cabecera></cabecera>
	// EJEMPLO DE DIRECTIVA		
	.directive('cabecera', function() {
		 	var template = {
			templateUrl: 'vistas/cabecera.view.html'
		};
		return template;
	};


		// para usarlo tenemos que poner en el html <lista-articulos></lista-articulos>
	// EJEMPLO DE COMPONENTE
	component('listaArticulos', {
		templateUrl: 'vistas/articulos.view.html',
		controller: 'artCtrl'
	});

	
	// Ejemplo de petición AJAX
	var peticion = {
		"url": "url.php"
		"method": "POST",
		"headers": {
			"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
		},
		"data": "asdfasdf";
	}