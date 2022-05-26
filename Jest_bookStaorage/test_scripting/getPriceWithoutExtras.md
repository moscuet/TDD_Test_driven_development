### **getPriceWithoutExtras(id)**

Returns the price with out extras

  - Parameters: id of the book
  - Return: The price of the book not including the price of the extras
  - if no book with the given number is found throws an exeption `nothing found with given id`



### Test1 : parameter missing' return  exception('parameter missing')

```js
getPriceWithoutExtras();
```
return 
```
'parameter missing'
```

### Test2 :  Not existed name throw exception 'nothing found with given id'

```js
getPriceWithoutExtras('fake_id');
```
return 
```
'nothing found with given id'
```

### Test3 :  getPriceWithoutExtras(1) returns 25

```js
getPriceWithoutExtras(1);
```
return 
```
25
```

### Test4 :  getPriceWithoutExtras(2) returns 45

```js
getPriceWithoutExtras(2);
```
return 
```
45
```

### Test5 :  getPriceWithoutExtras(3) returns 30

```js
getPriceWithoutExtras(3);
```
return 
```
30
```

