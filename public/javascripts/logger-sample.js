'use strict'

module.exports = angular.module('logger-sample',
    [
        require('ngServerLogger').name
    ]
).controller('MainCtrl', function($scope, $log){
    $scope.error = '';
    $scope.warn = '';
    $scope.info = '';
    $scope.debug = '';
    $scope.log = '';
    $scope.thrown = '';

    $scope.logError = function(){
        $log.error($scope.error);
        $scope.error = '';
    };

    $scope.logWarn = function(){
        $log.warn($scope.warn);
        $scope.warn = '';
    }

    $scope.logInfo = function(){
        $log.info($scope.info);
        $scope.info = '';
    }

    $scope.logDebug = function(){
        $log.debug($scope.debug);
        $scope.debug = '';
    }

    $scope.logLog = function(){
        $log.log($scope.log);
        $scope.log = '';
    }

    $scope.throwError = function(){
        throw $scope.thrown;
        $scope.thrown = '';
    }
});