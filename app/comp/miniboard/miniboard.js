/**
 *
 *
 */
angular
    .module("app")
    .component("miniboard", {
        bindings: { fen: '<' },
        templateUrl: "app/components/miniboard/miniboard.html",
        controller: function($scope, $rootScope) {
            if (typeof $rootScope.miniboardCount === "undefined") {
                $rootScope.miniboardCount = 0;
            }
            var miniboard = this;
            miniboard.id = 'miniboard-' + $rootScope.miniboardCount++;
            this.$onInit = function () {
                setTimeout(function () {
                    var board = new ChessBoard(miniboard.id, {
                        showNotation: false
                    });
                    board.position(miniboard.fen);
                }, 200);
            }
        }
    });

