app.controller('MainController', ['$scope', 'places', function($scope, places){
	$scope.mapCenter = {
	  lat: 40.741934,
	  lng: -74.004897,
	  zoom: 20
	};

	places.success(function(data){
		$scope.geodata = data;
		$scope.mapMarkers = geodataToMarkers($scope.geodata);
		console.log(data);
	
		console.log($scope.geodata);
	});
	
/*
	$scope.mapMarkers = [
	  {
	    lat: 40.741389,
	    lng: -74.003056,
	    message: "111 Eighth Avenue"
	  },
	  {
	    lat: 40.7425,
	    lng: -74.006111,
	    message: "Chelsea Market"
	  }
	];*/

}]);