
### **getTotalPrice(id)**

Returns the total price of the book including the total price of the extras

  - Parameters: id of the book
  - Return: The price of the book including the total price of the extras
  - if no book with the given number is found throws an exeption `nothing found with given id`



### Test1 : parameter missing' return  exception('parameter missing')

```js
getTotalPrice();
```
return 
```
'parameter missing'
```

### Test2 :  Not existed name throw exception 'nothing found with given id'

```js
getTotalPrice('fake_id');
```
return 
```
'nothing found with given id'
```

### Test3 :  getTotalPrice(1) returns 70

```js
getTotalPrice(1);
```
return 
```
70
```

### Test4 :  getTotalPrice(2) returns 145

```js
getTotalPrice(2);
```
return 
```
190
```

### Test5 :  getTotalPrice(3) returns 145

```js
getTotalPrice(3);
```
return 
```
30
```
