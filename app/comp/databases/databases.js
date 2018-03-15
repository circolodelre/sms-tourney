/**
 *
 *
 */
angular
    .module("app")
    .component("databases", {
        templateUrl: "app/components/databases/databases.html",
        controller: function($scope, $rootScope) {
            var databases = this;

            databases.selectRecord = function(record) {
                console.log('select r', record);
                $rootScope.databaseRecord = record;
                $rootScope.loadRecord();
            };
        }
    });

