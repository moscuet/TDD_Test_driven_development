### **GetBookTopics(id)**

Returns an array of book topics. If none found, returns an empty array.

  - Parameters: id of the book 
  - Return: returns topics as an array

 

### Test1 :  missing parameters return 'parameter missing'

```js
GetBookTopics();
```
return 
```
'parameter missing'
```



### Test2 :  GetBookTopics(2) return ["data storages", "sql", "noSql"]

```js
GetBookTopics(2);
```
return 
```
["data storages", "sql", "noSql"]
```


### Test3 :  GetBookTopics(3) return  []

```js
GetBookTopics(3);
```
return 
```
[]
```
