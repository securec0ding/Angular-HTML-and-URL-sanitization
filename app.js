import 'angular';

var calcApp = angular.module('Calculator', [
  require('angular-route'),
  require('angular-sanitize')
]);

calcApp.controller('CalculatorController', ['$scope',
  function($scope) {
   $scope.Calculate = function() {
    try {
      $scope.result = eval($scope.computation);
    } catch (e) {
      $scope.result = $scope.computation;
    }
   }
  }
]);

calcApp.directive('calculator', function() {
  return {
    restrict: 'E',
    template: `
      <div>
        <h3>
          Result: {{ result }}
        </h3>
        <hr />
        <form>
          <label>
            Enter a calculation:
          </label>
          <input
            id="computation"
            type="text"
            ng-model="computation"
            ng-change="Calculate()"
          />
        </form>
      </div>
    `,
    controller: 'CalculatorController',
    link: function(scope, element, attrs) {}
  };
});
