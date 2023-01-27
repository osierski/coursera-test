(function() {
'use strickt';


angular.module('calcApp', [])
    .controller('calcAppController', function ($scope) { 

    $scope.valueToCalc = "";

    $scope.caclulatedLenght = 0;
    $scope.calcFunction = function () {
      return calculateNumericForString( $scope.valueToCalc );
    };
  });

  function calculateNumericForString(string) {
    var totalStringValue = 0;
    console.log("--- start ---");
    for (var i = 0; i < string.length; i++) {
      totalStringValue += string.charCodeAt(i);
//      $scope.valueToCalc = $scope.valueToCalc + '; ';
    console.log("--- totalStringValue ---" + totalStringValue);
  }

    return totalStringValue;
  }
  
  })();
  