/**
 *
 *
 */

angular
    .module("app")
    .component("layout", {
        templateUrl: "app/comp/layout/layout.html",
        controller: function($scope) {}
    })
    .run(function() {
        function layout() {
            console.log('layout');
            var w = $(window).innerWidth();
            var h = $(window).innerHeight();
            $('.layout-under-mainboard-height').innerHeight(h - 420 - 52 - 8 - 8);
            $('.layout-inner-panel-height').innerHeight(h - 52 - 52 - 8 - 8 - 8);
            $('.layout-full-height').innerHeight(h - 52 - 8 - 8);
        }
        $(window).resize(layout);
        setTimeout(layout, 200);
    });

