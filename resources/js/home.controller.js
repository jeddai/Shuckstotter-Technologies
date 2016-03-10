app.controller('home', ['$scope','$location', '$http','$log','db', function($scope, $location, $http, $log, db) {
    $scope.title = "You are at home";
    $scope.init = function(){
        db.getFoos().then(function(foos) {
            $scope.foos = foos;
            $log.info($scope.foos);
        });
    };
    $scope.init();
}]);
