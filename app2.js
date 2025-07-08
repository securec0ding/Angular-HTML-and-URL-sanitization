import 'angular';

var app = angular.module('RailsAngularSanitize', [
  require('angular-route'),
  require('angular-sanitize')
]);

app.controller('UrlGeneratorController', ['$scope', '$window', '$sce',
  function($scope, $window, $sce) {
    $scope.url = $sce.trustAsUrl($window.__url__);
  }
]);

app.directive('urlGenerator', function() {
  return {
    restrict: 'E',
    template: `
      <div>
        <h3>
          URL: <a ng-href="{{url}}" ng-bind-html="url"></a>
        </h3>
        <hr />
        <form>
          <label>
            Enter your URL:
          </label>
          <input
            id="prompt"
            type="text"
            ng-model="url"
          />
        </form>
      </div>
    `,
    controller: 'UrlGeneratorController',
    link: function(scope, element, attrs) {}
  };
});
