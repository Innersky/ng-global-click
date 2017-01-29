<h1>Angular Global click event listener</h1>
It's easy to register an event listerner but not that much easy to trigger an event with clicking outside the box. Most usage is to close a popup, which is opened by clicking on a button, when clicking outside that button.
<br>
<br>
This library make it easier as you don't need to maintain any function to handle the event, just simply code expression within the element.
<br>
<br>
It registers <code>touchstart</code> for touch devices.
<br>
<br>
Demo: [Angular ng-global-click Demo](http://app.bill-min.com/ng-global-click/)
<br>
<br>
Usage:
```
angular.module('myApp', ['ngGlobalClick'])
```

```
//Normally you register the trigger in <body> element
<body global-click-trigger>
</body>
```

Register events that will happen when clicking outside of the element

```
<your-element on-global-click="expression"></your-element>

```