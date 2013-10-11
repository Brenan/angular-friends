app.controller("friendController", function($scope){

	$.getJSON('https://s3.amazonaws.com/intuiplan_company_files/production/files/public/FriendData.json',
			function(response){
			$scope.friends= response.results;
			$scope.$apply();	
			console.log(response);	
			}
		);
	$scope.searchTerm="";

});




