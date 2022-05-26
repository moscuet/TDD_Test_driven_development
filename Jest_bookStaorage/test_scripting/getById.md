# Test Cases

## **getById(id)**

Method searches the datastorage for an object with given key. Key is unique.

  - Parameters: id of the book
  - Return: returns the book object matching the id or null if there is no match
  - if parameter is missing, throws an exception `'parameter missing'`

  ### Test1: missing parameter throws an exception

```js
bookStorage.getById();
```
return 
```
parameter missing
```

  ### Test2: non existed id return `'Not existed'`

```js
bookStorage.getById(fakeId)
```
```js
returns null
```
### Test3: valid id as parameter return corresponding json object 


