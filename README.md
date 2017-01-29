<h1>Angular Global click event listener</h1>
Poping up an alert window is the most popular way to confirm a button action, which is anoying sometimes. This idea for In-Place-Confirm Button is to get rid of space wasting and get clearer vision to confirm an action.

Demo: [Angular In-Place-Confirm Button Demo](http://app.bill-min.com/ng-in-place-confirm-btn/)

Usage:
```
angular.module('myApp', ['ngInPlaceConfirmBtn'])
```

```
<ng-in-place-confirm-btn option="option" submit="submit"></ng-in-place-confirm-btn>
```

```
$scope.option = 
{
    yourID: 'btn-id',
    name: 'My IPC Button',
    hasInputBox: true,
    placeholder: '(required) This is placeholder',
    tooltip: 'This is a tooltip This is a tooltip This is a tooltip This is a tooltip This is a tooltip This is a tooltip This is a tooltip',
    tooltipDirection: 'right',
    inputBoxName: 'myInput',
    inputRequired: true
};

$scope.submit = function () {
    $scope.submit = function (input, btnOption) {
        $scope.$broadcast('submitting');
        $timeout(function () {
            $scope.$broadcast('submitted');
            window.alert("Your ID for this Button is: " + btnOption.yourID + ". Your input is: " + input);
        }, 1000);
    }
}
```