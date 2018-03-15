
var app = angular.module("simpleApp", []);
 
app.controller("simpleController", function($scope){

	// Array of values to be displayed in a dropdown list
	$scope.values = [
		{id: "IdealTextDE" , name: "Ideal Text(DE)"},
		{id: "IdealTextEN" , name: "Ideal Text(EN)"},
		{id: "DescriptionDE" , name: "Description(DE)"},
		{id: "DescriptionEN" , name: "Description(EN)"},
		{id: "Status" , name: "Status"},
		{id: "DeviceGeneration" , name: "Device Generation"}
	];	

	/* This function will be called once we select some value
	   from our drop down list.
	   Selected value will be deleted from list.
	   Works with 'ng-change' of angular (index.html : line 13)
	*/
	$scope.deleteOption = function(){
		
		// Get the index of selected option from drop down
		var index = $scope.values.indexOf($scope.selected_option);
		
		// If index is present, delete it from list/array
		if(index > -1){
			$scope.values.splice(index,1)
		}
		
	};
});