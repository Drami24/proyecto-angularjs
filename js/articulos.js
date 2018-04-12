
var miApp = angular.module('artApp',[]);
miApp.controller('artCtrl',function($scope){

	$scope.articulos = [
		{id:1, des:'Lápices', pre:2.5},
		{id:2, des:'Borradores', pre:12.5},
		{id:3, des:'Plumas', pre:25.5},
		{id:4, des:'Bolígrafos', pre:20.5}
	];

	$scope.datos = {
		id:1,
	 	referencia:'',
	 	descripcion:'Lápices',
	 	precio:2.5,
	 	alta:'2017/03/22 12:12:00'
	}

	$scope.modifica = function() {
		$scope.modal = {
			'opcion' : 'Editar',
			'boton' : 'Guardar',
			'color' : 'bg-info',
			'cboton' : 'btn-primary',
			'id' : this.articulo.id,
			'datos' : $scope.datos,
			'fecha' : ('').hoy()
		}
	};

});

	miApp.filter('currency', function() {
		return function (texto, moneda) {
			return  parseFloat(texto).formato(moneda);
		}
	});

	miApp.filter('vfecha', function() {
		return function vfecha(texto) {
			return (texto)?texto.fv():'';
		}
	});

	// miApp.component('listaArticulos', {
	// 	templateUrl: 'vistas/articulos.view.html',
	// 	controller: 'artCtrl'
	// });