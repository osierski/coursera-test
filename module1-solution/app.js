(function () {
    'use strickt';

    var maxLunchMates = 3;
    var messageOk = "Enjoy!";
    var messageNotOk = "Too much!";
    var messageNoMates = "C'mon, provide some mates";

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope', '$filter']; //$filter is not neccecery here 
    function LunchCheckController($scope, $filter) {

        $scope.checkResult = "";


        $scope.doCheck = function () {
            var mates = $scope.names.split(',');

            var matesCount = 0;
            for (var i = 0; i < mates.length; i++) {
                if (mates[i].trim().length > 0) {
                    matesCount++;
                }
            }

            if (matesCount == 0) {
                $scope.checkResult = messageNoMates;
            } else {
                if (matesCount <= maxLunchMates) {
                    $scope.checkResult = messageOk;
                } else {
                    $scope.checkResult = messageNotOk;
                }
            }
        };

    }
})();
