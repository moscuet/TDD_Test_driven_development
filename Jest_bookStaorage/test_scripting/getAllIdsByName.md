### **getAllIdsByName(value)**

Returns all ids of the books matching the value of name
  
  - Parameters: value of the property to be searched
  - Return: Returns an array of book id where the books name matches the given value. If there is no match or parameter is missing, an empty array is returned.
  

### Test1 :  missing parameters return []

```js
getAllIdsByName();
```
return 
```
[]
```

### Test2 :  Not existed name return []

```js
getAllIdsByName('not_existed_name);
```
return 
```
[]
```
### Test3 :  parameter 'NoSql - New Hope'  return corresponding book details

```js
getAllIdsByName('NoSql - New Hope');
```
return 
```json
{
    "id": 1,
    "name": "NoSql - New Hope",
    "author": "Layla Jones",
    "topics": ["noSql", "sql", "future databases"],
    "price": 25,
    "extras": [{
        "name": "hard cover",
        "price": 30
      },
      {
        "name": "cd",
        "price": 15
      }
    ]
  }
```


### Test4 :  parameter 'Databases - The rise and fall'  return corresponding book details

```js
getAllIdsByName('Databases - The rise and fall');
```
return 
```json
{
    "id": 2,
    "name": "Databases - The rise and fall",
    "author": "Antony Lee",
    "topics": ["data storages", "sql", "noSql"],
    "price": 45,
    "extras": [{
        "name": "signed by author",
        "price": 80
      },
      {
        "name": "dvd",
        "price": 65
      }
    ]
  }
```




### Test5 :  parameter 'Hacking databases'  return corresponding book details

```js
getAllIdsByName('Hacking database');
```
return 
```json
{
    "id": 3,
    "name": "Hacking databases",
    "author": "Emily White",
    "topics": [],
    "price": 30,
    "extras": []
  }
```
