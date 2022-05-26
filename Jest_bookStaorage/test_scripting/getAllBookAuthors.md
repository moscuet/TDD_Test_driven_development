### **getAllBookAuthors()**

Returns an array of different book authors. 

  - Parameters: none
  - Return: Returns an array of different book authors. If no authors are found, returns an empty array. The author is added to the result array only once.

  

### Test1 :  search all authors in default book storage

```js
getAllBookAuthors();
```
return 
```
['Layla Jones','Antony Lee','Emily White']
```

### Test2 :  search all authors in a book storage with non existent author name return []
```

    const dataWithoutAuthor =  [
        {
          "id": 1,
          "name": "NoSql - New Hope",
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
    ]

```

```js
getAllBookAuthors();
```
return 
```
[]
```
