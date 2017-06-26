# Javascript OOP Example
This project is example of OOP in Javascript.

# 1. Inherit Prototype
```javascript
function inheritPrototype(childObject, parentObject) {
  	var copyOfParent = Object.create(parentObject.prototype);
  	copyOfParent.constructor = childObject;
  	childObject.prototype = copyOfParent;
  }
```