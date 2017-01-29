(function () {
    'use strict';

    angular.module('ngGlobalClick', [])
        .directive('globalClickTrigger', globalClickTriggerFunc)
        .directive('onGlobalClick', onGlobalClickFunc);


    function globalClickTriggerFunc($window) {
        return {
            restrict: 'A',
            link: function (scope) {
                function onClick(e) {
                    scope.$broadcast('globalClickTrigger::click', e.target);
                }

                function cleanUp() {
                    angular.element($window).off('click', onClick);
                }

                angular.element($window).on('click', onClick);
                scope.$on('$destroy', cleanUp);

            }
        }
    }

    function onGlobalClickFunc() {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var triggerFunc = attrs.onGlobalClick;

                scope.$on('globalClickTrigger::click', function (event, targetElement) {
                    if(!isParent(element[0], targetElement))
                        scope.$evalAsync(triggerFunc);
                });
                function isParent(element, targetElement) {
                    if(angular.element(element).length == 0 || angular.element(targetElement).length == 0) {
                        return false;
                    }

                    if(angular.equals(document, targetElement))
                        return false;

                    if(angular.equals(element, targetElement))
                        return true;
                    else
                        return isParent(element, angular.element(targetElement).parent()[0]);
                }
            }
        }
    }
})();