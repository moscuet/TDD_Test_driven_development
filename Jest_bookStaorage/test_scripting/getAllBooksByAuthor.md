### **getAllBooksByAuthor(author)**

Returns an array of book objects of given author

  - Parameters: author of the book to be searched
  - Returns an array of book objects of given author. If no book of given author is found, returns an empty array.
  - If a parameter author is missing, an exeption **'missing parameter'** is thrown.


### Test1 :  missing parameter throws an exception

```js
getAllBooksByAuthor();
```
return 
```
'missing parameter'
```

### Test2 :  Not existed name return []

```js
getAllBooksByAuthor(('not_existed_name);
```
return 
```
[]
```
### Test3 :  parameter 'Layla Jones'  return return author's corresponding books 

```js
getAllBooksByAuthor(('Layla Jones');
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


### Test4 :  parameter 'Antony Lee'  return author's corresponding books 

```js
getAllBooksByAuthor(('Antony Lee');
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
