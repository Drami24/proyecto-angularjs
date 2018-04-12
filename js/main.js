
angular
	.module('almacenApp', ['ngRoute', 'artApp'])
	.config(function($routeProvider, $locationProvider) {
		$locationProvider.hashPrefix('');
		$routeProvider
			.when('/', {
				templateUrl : 'vistas/inicio.view.html',
				controller : 'mainCtrl'
			})
			// .when('/logout', {
			// 	templateUrl : 'vistas/inicio.view.html',
			// 	controller : 'logoutCtrl'
			// })
			// .when('/home', {
			// 	templateUrl : 'vistas/home.view.html',
			// 	controller : 'homeCtrl'
			// })
			// .when('/articulos', {
			// 	templateUrl : 'vistas/larticulos.view.html',
			// 	controller : 'lartCtrl'
			// })
			.when('/inventario', {
				templateUrl : 'vistas/articulos.view.html',
				controller : 'artCtrl'
			})
			.when('/contacto', {
				templateUrl : 'vistas/contacto.view.html',
				controller : 'contactoCtrl'
			})
			.when ('/registro', {
				templateUrl : 'vistas/registro.view.html',
				controller : 'registroCtrl'
			})
			.when ('/perfil', {
				templateUrl : 'vistas/perfil.view.html',
				controller : 'perfilCtrl'
			})
			.otherwise({
				redirectTo : '/home'
			});

	})
	.controller('mainCtrl', function($scope, $http) {
		// $scope.gatos=[];
		// $scope.obtenerGatos=function() {
		// 	$http({
		// 		method: "POST",
		// 		url: "http://www.programandoconrupert.com/ws/servicio-gatos.php"
		// 	}).then(function correcto(respuesta) {
		// 		$scope.gatos=respuesta.data;
		// 		console.log('exito');
		// 	}, function error(respuesta) {
		// 		alert(respuesta.statusText);
		// 		console.log('falso');
		// 	});
		// };
	})
	.filter('currency', function() {
		return function currency(texto) {
			return  parseFloat(texto).formato();
		}

	})
	.filter('vfecha', function() {
		return function vfecha(texto) {
			return (texto)?texto.fv():'';
		}
	});