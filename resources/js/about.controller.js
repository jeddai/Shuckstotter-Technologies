app.controller('about', ['$scope','$location', '$log', function($scope, $location, $log) {
    $scope.title = "You are at about";
    $log.info($scope.title);
}]);
