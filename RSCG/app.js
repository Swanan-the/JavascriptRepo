
	var app = angular.module("simpleApp", []);
	 
	app.controller("simpleController", function($scope){
		
		var textValues = [];
		
		// Array of values to be displayed in a dropdown list
		$scope.values = [
			{id: "IdealTextDE" , name: "Ideal Text(DE)"},
			{id: "IdealTextEN" , name: "Ideal Text(EN)"},
			{id: "DescriptionDE" , name: "Description(DE)"},
			{id: "DescriptionEN" , name: "Description(EN)"},
			{id: "Status" , name: "Status"},
			{id: "DeviceGeneration" , name: "Device Generation"}
		];	

		/* This function will be called once we select some value from our drop down list.
		   Selected value will be deleted from list. A new label and text field will be added
		*/
		$scope.deleteOption = function(){
			
			var selection = $scope.selected_option;
			textValues.push(selection.id);
			
			// Create new elements for label and Input text
			 var newEleLabel = angular.element('<label type="text">'+selection.name+'</label></br>');
			 var newEleInput = angular.element('<input type="text" ng-model="obj.'+selection.id+'" /></br></br>');
			 
			// Add these elements to html dom 
			 var target = document.getElementById('formelements');
			 angular.element(target).append(newEleLabel);
			 angular.element(target).append(newEleInput);
			
			// Get the index of selected option from drop down
			var index = $scope.values.indexOf(selection);
			// If index is present, delete it from list/array
			if(index > -1){
				$scope.values.splice(index,1)
			}
			
		};
		
		
		$scope.showOnClick = function(obj){
			
			var jsonArray = [];
			var stringObj = "";
			
			var keys = Object.keys(obj);
			
			for(var i=0 ; i<keys.length; i++){
				
				textValues.push(keys[i]);
				
				stringObj+= "position" + (i+1) + ":" + "{" + keys[i] + ":" + obj[keys[i]] + "}";
				
				jsonArray.push(stringObj);
				stringObj = "";
			}
			
			console.log(jsonArray);
		}
			 
	});