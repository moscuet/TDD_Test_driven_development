### **getTotalPrice(id)**

Returns the total price of the book including the total price of the extras

  - Parameters: id of the book
  - Return: The price of the book including the total price of the extras
  - if no book with the given number is found throws an exeption `nothing found with given id`


### Test1 : parameter missing' return  exception('parameter missing')

```js
getPriceOfTheExtras();
```
return 
```
'parameter missing'
```

### Test2 :  Not existed id throw exception 'nothing found with given id'

```js
getPriceOfTheExtras()('fake_id');
```
return 
```
'nothing found with given id'
```

### Test3 :  getPriceOfTheExtras(1) returns 45

```js
getPriceOfTheExtras(1);
```
return 
```
45
```

### Test4 :  getPriceOfTheExtras(2) returns 145

```js
getPriceOfTheExtras(2);
```
return 
```145
```

### Test5 :  getPriceOfTheExtras(3) returns 0

```js
getPriceOfTheExtras(3);
```
return 
```
0
```

