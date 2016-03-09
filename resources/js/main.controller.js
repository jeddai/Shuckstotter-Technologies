app.controller('main', ['$scope','$anchorScroll','$location','$window', function($scope, $anchorScroll, $location, $window) {
    $scope.title = "You are at main";

    $scope.templateUrl = function(item, location) {
        return location + item + '.html';
    };

    $scope.init = function() {
        //console.log($location);
    };
    //$scope.init();

    $scope.gotoAnchor = function(x) {
      var newHash = x;
      if ($location.hash() !== newHash) {
        // set the $location.hash to `newHash` and
        // $anchorScroll will automatically scroll to it
        $location.hash(x);
      } else {
        // call $anchorScroll() explicitly,
        // since $location.hash hasn't changed
        $anchorScroll();
      }
    };
}]);
