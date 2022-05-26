# Test Cases

## **constructor(data)**

Books json array is passed as a parameter `data`. If the parameter is missing, throws an exeption `'data storage missing'`;


### Test 1: object created
```js
new PhoneRegister(jsonData);
```

test if the objects innerfield has the same value as given as parameter. Parameter jsonData is the json array from the default `dataStorage.json`

### Test2; missing parameter throws an exception
```js
new PhoneRegister();
```

this will throw en exception `'data storage missing'`.
