app.controller('template', ['$scope','$location', '$log', function($scope, $location, $log) {
    $scope.title = "You are at template";
    $log.info($scope.title);
}]);
