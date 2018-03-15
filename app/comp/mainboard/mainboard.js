/**
 *
 *
 */
angular
    .module("app")
    .component("mainboard", {
        templateUrl: "app/components/mainboard/mainboard.html",
        controller: function($scope, $rootScope) {
            var mainboard = this;
            mainboard.$onInit = function() {
                $rootScope.mainboard = new ChessBoard("mainboard");
            };
        }
    });

