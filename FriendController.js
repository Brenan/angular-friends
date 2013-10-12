fbFriendsApp.controller("friendController", function($scope, $http){

	$http.get('https://s3.amazonaws.com/intuiplan_company_files/production/files/public/FriendData.json').success(function(response){
		$scope.friends= response.results;
		$scope.$apply();	

		angular.forEach(response.results, function(friend) {
			friend.friend_count = friend.friend_count ? parseInt(friend.friend_count) : 0;
		});
	});	
			
	
	$scope.searchTerm="";
	$scope.sortBy = "name";
	$scope.sortOrder = "false";



});




